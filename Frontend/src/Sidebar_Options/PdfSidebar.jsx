import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaFilePowerpoint, FaTasks, FaVideo, FaQuestionCircle } from 'react-icons/fa';
import style from '../CSS Module/Sidebar.module.css'


export default function PdfSidebar({activeSection, setActiveSection}) {

  const menuItems = [
    { label: 'PDF', icon: <FaFilePdf />, section: 'pdf' },
    { label: 'PPT', icon: <FaFilePowerpoint />, section: 'ppt' },
    { label: 'Assignment', icon: <FaTasks />, section: 'assignment' },
    { label: 'Videos', icon: <FaVideo />, section: 'videos' },
    { label: 'Quiz', icon: <FaQuestionCircle />, section: 'quizzes' },
  ];

  return (
    <div className={`${style.sidebar}`}>
      <div className="py-4 px-5 text-lg font-bold border-t border-b border-gray-700">Content</div>
      <ul className="flex flex-col mt-4">
        {menuItems.map((item) => (
          <li key={item.section} className={`py-2 p-4 flex items-center cursor-pointer ${activeSection === item.section ? 'bg-blue-600' : 'hover:bg-blue-500'}`}
            onClick={() => setActiveSection(item.section)}>
            <div className="mr-3">{item.icon}</div>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
