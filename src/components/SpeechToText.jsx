import React, { useState, useRef } from 'react';

const SpeechToText = () => {
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Your browser does not support Speech Recognition. Try using Chrome.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US'; // Change to 'ar-SA', 'fr-FR', etc. for other languages
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        interimTranscript += event.results[i][0].transcript;
      }
      setText(interimTranscript);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">🎤 Speech-to-Text Converter</h1>

      <textarea
        rows="8"
        className="w-full max-w-xl p-4 border rounded-md shadow bg-white"
        value={text}
        readOnly
      ></textarea>

      <div className="mt-4 flex gap-4">
        <button
          onClick={startListening}
          disabled={listening}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={stopListening}
          disabled={!listening}
          className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50"
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default SpeechToText;
