import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

const FaceDetection = () => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [emotionData, setEmotionData] = useState(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models"; // put models in public/models
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]);
      startVideo();
    };

    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: {} })
        .then((stream) => (videoRef.current.srcObject = stream))
        .catch((err) => console.error("Webcam error:", err));
    };

    loadModels();
  }, []);

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (canvasRef.current) {
        const dims = faceapi.matchDimensions(canvasRef.current, videoRef.current, true);
        const resized = faceapi.resizeResults(detections, dims);
        faceapi.draw.drawDetections(canvasRef.current, resized);
        faceapi.draw.drawFaceExpressions(canvasRef.current, resized);

        if (resized.length > 0) {
          setEmotionData(resized[0].expressions);
        }
      }
    }, 1000);
  };

  return (
    <div>
      <video ref={videoRef} autoPlay muted onPlay={handleVideoOnPlay} width="720" height="560" />
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
      <div>
        {emotionData && (
          <pre>{JSON.stringify(emotionData, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};

export default FaceDetection;
