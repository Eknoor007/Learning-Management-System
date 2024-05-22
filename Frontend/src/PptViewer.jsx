// src/components/PptViewer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './PptViewer.css';

const PptViewer = ({ url }) => {
  return (
    <>
    <h1 className='mx-4 linear bg-gradient-to-r from-purple-800 via-cyan-600 to-violet-700 inline-block text-transparent bg-clip-text'>The Ultimate React Native Guide</h1>
    <hr></hr>
    <div className="ppt-viewer">
      <iframe 
        src={url}
        width="100%"
        height="600px"
        frameBorder="0"
        title="PowerPoint Viewer"
        allowFullScreen
      ></iframe>
    </div>
    </>
  );
};

PptViewer.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PptViewer;
