

document.getElementById('uploadButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
      alert('Please select a file.');
      return;
    }
  
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);
  //http://20.247.231.116:5000
    try {
      const response = await fetch('http://192.168.212.153:5000/predict', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      document.getElementById('result').innerHTML = `
        <p>Prediction: ${result.prediction}</p>
        <p>Confidence: ${result.confidence.toFixed(2)}</p>
      `;
    } catch (error) {
      console.error('Error uploading file:', error);
      document.getElementById('result').innerHTML = '<p>Error uploading file.</p>';
    }
  });
  