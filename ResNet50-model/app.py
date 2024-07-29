import os
import mindspore as ms
from flask import Flask, request, jsonify
from flask_cors import CORS
from mindspore import Tensor
from mindspore.train import Model
from mindspore.train.serialization import load_checkpoint, load_param_into_net
from mindspore.nn import Softmax
import numpy as np
from PIL import Image
from resnet50_arch import resnet50
import tempfile

app = Flask(__name__)
CORS(app)

cfg = {
    'HEIGHT': 224,
    'WIDTH': 224,
    '_R_MEAN': 123.68,
    '_G_MEAN': 116.78,
    '_B_MEAN': 103.94,
    '_R_STD': 1,
    '_G_STD': 1,
    '_B_STD': 1,
    'num_class': 2,
    'model_path': 'spotumAI(98_81).ckpt'
}

class_names = {0: 'Normal', 1: 'Tuberculosis'}

def preprocess_image(image_path):
    image = Image.open(image_path).convert('RGB')
    image = image.resize((cfg['WIDTH'], cfg['HEIGHT']))
    image = np.array(image).astype(np.float32)
    image = (image - [cfg['_R_MEAN'], cfg['_G_MEAN'], cfg['_B_MEAN']]) / [cfg['_R_STD'], cfg['_G_STD'], cfg['_B_STD']]
    image = np.transpose(image, (2, 0, 1))
    image = np.expand_dims(image, axis=0)
    return Tensor(image, ms.float32)

def load_model():
    net = resnet50(class_num=cfg['num_class'])
    param_dict = load_checkpoint(cfg['model_path'])
    load_param_into_net(net, param_dict)
    model = Model(net)
    return model

model = load_model()

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    with tempfile.NamedTemporaryFile(delete=False) as temp_file:
        file.save(temp_file.name)
        temp_file_path = temp_file.name

    image = preprocess_image(temp_file_path)
    output = model.predict(image)
    softmax = Softmax()
    probabilities = softmax(output).asnumpy()
    predicted_class = np.argmax(probabilities, axis=1)[0]
    predicted_label = class_names[predicted_class]
    confidence = probabilities[0][predicted_class]

    os.remove(temp_file_path)

    return jsonify({
        'prediction': predicted_label,
        'confidence': float(confidence)
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
