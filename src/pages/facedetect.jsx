import React from 'react';
import FaceDetection from "../components/FaceDetection.jsx";

const Facedetect = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 flex flex-col items-center justify-center py-8">
      <div className="text-center text-white mb-8">
        <h2 className="text-4xl font-bold text-white">Facial Emotion Detector</h2>
        <p className="text-lg mt-4">Real-time analysis of your emotions through facial expressions</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl">
        <div className="relative">

          <FaceDetection />
        </div>

        <div className="mt-6">
          <p className="text-gray-700 text-xl">Emotion Data:</p>
          <div className="mt-3 p-4 bg-gray-50 border rounded-md text-center text-xl font-semibold text-gray-900">
            <p>Emotion data will appear here after detection.</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 w-full text-center text-white text-sm">
        <p>&#169; 2025 Facial Emotion Detection App</p>
      </div>
    </div>
  );
};

export default Facedetect;
