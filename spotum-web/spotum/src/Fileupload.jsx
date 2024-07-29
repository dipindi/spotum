import React, { useState, useEffect } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await fetch("http://20.247.129.47:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setResult({
        prediction: result.prediction,
        confidence: result.confidence.toFixed(2),
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Error uploading file.");
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setFile(null);
    setPreviewUrl(null);
    setResult(null);
    setError(null);
  };

  return (
    <main className="mainContent">
      <div className="contentWrapper">
        <div className="imageColumn">
          {!file ? (
            <label htmlFor="fileInput" className="Body">
              Add Image
            </label>
          ) : (
            <img src={previewUrl} alt="Preview" className="resultImage" />
          )}
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            className="fileInput"
            style={{ display: "none" }}
          />
        </div>
        <div className="textColumn">
          <div className="resultContent">
            <h2 className="resultTitle">
              {result ? (
                <>
                  <span className="normalText">{result.prediction}</span>
                  <br />
                  <span className="confidenceText">
                    [{result.confidence * 100}% Confidence]
                  </span>
                </>
              ) : (
                "Upload and Predict"
              )}
            </h2>
            <p className="disclaimer">
              *Not a substitute for professional medical diagnosis.
            </p>
            <div className="buttonSection">
              {file && (
                <>
                  <button
                    id="uploadButton"
                    onClick={handleUpload}
                    className="uploadButton"
                    disabled={loading}
                  >
                    {loading ? "Uploading..." : "Upload and Predict"}
                  </button>
                  <button onClick={handleRetry} className="startOverButton">
                    <img
                      src="https://icons.veryicon.com/png/o/file-type/file-type-icon-library/retry-1.png"
                      alt="Retry"
                      className="buttonIcon"
                    />
                    Start over
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
    </main>
  );
};

export default FileUpload;
