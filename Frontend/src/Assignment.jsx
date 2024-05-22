import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Assignment = () => {
  const questions = [
    'What is the purpose of the useState hook in React Native? Can you provide an example of its usage?',
    'Can you explain how to use the fetch function to make API calls in React Native?',
    'What is the difference between props and state in React Native?',
    'What is the significance of the render method in a React Native component?',
    'How do you apply styles in React Native?',
    'How would you handle errors in a React Native application?',
    'Can you explain how to use the useEffect hook in React Native?'
  ];

  const [editorContent, setEditorContent] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = editorContent;
    setAnswers(newAnswers);
    console.log('Question:', questions[currentQuestionIndex]);
    console.log('Answer:', editorContent);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setEditorContent(newAnswers[currentQuestionIndex + 1] || ''); // Load the next answer
    } else {
      console.log('All questions completed');
    }
  };

  const handlePrevious = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = editorContent;
    setAnswers(newAnswers);

    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setEditorContent(newAnswers[currentQuestionIndex - 1] || ''); // Load the previous answer
    }
  };

  const handleNext = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = editorContent;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setEditorContent(newAnswers[currentQuestionIndex + 1] || ''); // Load the next answer
    }
  };

  return (
    <div className="assignment">
      <h2 className='p-2 linear bg-gradient-to-r from-purple-800 via-cyan-600 to-violet-700 inline-block text-transparent bg-clip-text'>Assignment</h2>
      <hr />
      <form onSubmit={handleSubmit} className='mx-1'>
        <div className="form-group">
          <label><h4>Question:</h4></label>
          <p id="question"><h6 className='mx-1'>{questions[currentQuestionIndex]}</h6></p>
        </div>
        <div className="form-group">
          <label htmlFor="answer"><h5>Answer:</h5></label>
          <ReactQuill
            theme="snow"
            value={editorContent}
            onChange={handleEditorChange}
          />
        </div>
        <div className='py-2 flex space-x-2'>
          <button
            type="button"
            className="p-[3px] relative"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          > <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          </button>
          <button
            className="p-[3px] relative"
            type='submit'
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-black hover:bg-gradient-to-r from-indigo-300 to-purple-300 hover:text-white">
              Submit
            </div>
          </button>
          <button
            type="button"
            className="p-[3px] relative"
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Assignment;