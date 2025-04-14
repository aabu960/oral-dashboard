// TextHighlight.js
import React, { useState, useRef } from 'react';
import { Document, Page } from 'react-pdf';
import './TextHighlight.css'; // Optional, you can style this further with Tailwind

const TextHighlight = ({ pdfFile }) => {
  const [highlightedText, setHighlightedText] = useState(null);
  const pdfRef = useRef(null);

  const handleHighlight = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    if (selectedText) {
      setHighlightedText(selectedText);
    }
    selection.removeAllRanges(); // Remove the text selection after highlighting
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl mb-4">PDF Text Highlighter</h1>
      <div className="flex justify-center">
        <button
          onClick={handleHighlight}
          className="bg-yellow-400 p-2 rounded hover:bg-yellow-500 transition"
        >
          Highlight Text
        </button>
      </div>

      <div className="mt-4">
        <div className="relative">
          <Document
            file={pdfFile}
            onLoadSuccess={({ numPages }) => {
              console.log(`Loaded ${numPages} pages`);
            }}
            className="border-2 border-gray-300 rounded"
            ref={pdfRef}
          >
            <Page pageNumber={1} />
          </Document>

          {highlightedText && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent text-yellow-500 text-lg">
              <p className="text-xl">Highlighted Text: {highlightedText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextHighlight;
