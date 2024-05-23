// src/components/PptViewer.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './PptViewer.css';

const PptViewer = () => {
  const [pptUrl, setPptUrl] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/ppts')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setPptUrl(data[0].url);
        }
      })
      .catch(error => console.error('Error fetching PPT:', error));
  }, []);

  return (
    <>
    <h1 className='mx-4 linear bg-gradient-to-r from-purple-800 via-cyan-600 to-violet-700 inline-block text-transparent bg-clip-text'>The Ultimate React Native Guide</h1>
    <hr></hr>
    <div className="ppt-viewer">
       {pptUrl && (
          <iframe 
            src={pptUrl}
            width="100%"
            height="600px"
            frameBorder="0"
            title="PowerPoint Viewer"
            allowFullScreen
          ></iframe>
        )}
    </div>
    </>
  );
};

PptViewer.propTypes = {
  url: PropTypes.string,
};

export default PptViewer;
