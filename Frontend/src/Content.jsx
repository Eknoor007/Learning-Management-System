import React, { useState } from 'react';
import Navbar from './Navbar';
import PdfSidebar from './Sidebar_Options/PdfSidebar';
import PdfViewer from './PdfViewer'
import PptViewer from './PptViewer';

export default function Content() {
  const [activeSection, setActiveSection] = useState('pdf');
  const fileUrl = './assets/React Native Guide Example by me.pdf'

  const renderContent = () => {
    switch (activeSection) {
      case 'pdf':
        return <div><PdfViewer/></div>;
      case 'ppt':
        return <div><PptViewer fileUrl={fileUrl}/></div>;
      case 'assignment':
        return <div>Assignment Content</div>;
      case 'videos':
        return <div>Videos Content</div>;
      case 'quizzes':
        return <div>Quizzes Content</div>;
      default:
        return <div> <PdfViewer/> </div>;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <PdfSidebar setActiveSection={setActiveSection} />
        <div className="flex-grow p-4">
          {renderContent()}
        </div>
      </div>
    </>
  );
}
