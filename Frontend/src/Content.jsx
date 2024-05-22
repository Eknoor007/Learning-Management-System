import React, { useState } from 'react';
import Navbar from './Navbar';
import PdfSidebar from './Sidebar_Options/PdfSidebar';
import Pdf from './PdfViewer';
import PptViewer from './PptViewer';
import Assignment from './Assignment';
import VideoRender from './VideoRender';
import Quiz from './Quiz';

export default function Content() {
  const [activeSection, setActiveSection] = useState('pdf');
  const pptUrl = 'https://docs.google.com/presentation/d/1SuLq6RClo80dmQP-iXw9W12OzJJCXSln/embed?start=false&loop=false&delayms=3000 ';

  const renderContent = () => {
    switch (activeSection) {
      case 'pdf':
        return <div><Pdf/></div>;
      case 'ppt':
        return <div><PptViewer url={pptUrl}/></div>;
      case 'assignment':
        return <div><Assignment/></div>;
      case 'videos':
        return <div><VideoRender/></div>;
      case 'quizzes':
        return <div><Quiz/></div>;
      default:
        return <div> <Pdf/> </div>;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <PdfSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="flex-grow p-4">
          {renderContent()}
        </div>
      </div>
    </>
  );
}
