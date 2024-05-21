import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PptViewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const fileUrl = process.env.PUBLIC_URL + '/assets/React Native Guide Example by me.pdf'; 

    return (
        <div className="h-screen">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
                <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
        </div>
    );
}