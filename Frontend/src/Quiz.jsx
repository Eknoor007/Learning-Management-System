import React, { useState } from 'react';

const questions = [
  {
    question: "What is the purpose of the useState hook in React Native?",
    options: [
      "To handle side effects in functional components",
      "To manage state in functional components",
      "To fetch data from an API",
      "To handle events in functional components"
    ],
    correctOption: 1
  },
  {
    question: "Which method is used to make API calls in React Native?",
    options: [
      "axios",
      "getData",
      "fetch",
      "httpRequest"
    ],
    correctOption: 2
  },
  {
    question: "What is the difference between props and state in React Native?",
    options: [
      "Props are mutable, state is immutable",
      "State is immutable, props are mutable",
      "Both props and state are mutable",
      "Props are immutable, state is mutable"
    ],
    correctOption: 3
  },
  {
    question: "How do you apply styles in React Native?",
    options: [
      "Using CSS stylesheets",
      "Using inline styles",
      "Using the StyleSheet.create method",
      "Using external CSS files"
    ],
    correctOption: 2
  },
  {
    question: "What is the purpose of the useEffect hook in React Native?",
    options: [
      "To manage state",
      "To handle side effects",
      "To create custom hooks",
      "To fetch data"
    ],
    correctOption: 1
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateResults = () => {
    let correctCount = 0;
    const results = questions.map((question, index) => {
      const isCorrect = selectedOptions[index] === question.correctOption;
      if (isCorrect) correctCount++;
      return {
        question: question.question,
        selectedOption: question.options[selectedOptions[index]],
        correctOption: question.options[question.correctOption],
        isCorrect: isCorrect
      };
    });
    return { correctCount, results };
  };

  const { correctCount, results } = calculateResults();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-800 via-cyan-600 to-violet-700 text-transparent bg-clip-text">
        React Native Quiz
      </h2>
      <hr></hr>
      {showResults ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Results:</h3>
          <p className="mb-4">You got {correctCount} out of {questions.length} correct.</p>
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className={`py-2 px-3 rounded-lg ${result.isCorrect ? 'bg-green-200' : 'bg-red-200'}`}>
                <p className="font-semibold">{result.question}</p>
                <p>Your answer: {result.selectedOption}</p>
                {!result.isCorrect && <p>Correct answer: {result.correctOption}</p>}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4">{questions[currentQuestionIndex].question}</h4>
            <div className="space-y-2">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`option-${currentQuestionIndex}-${index}`}
                    name={`option-${currentQuestionIndex}`}
                    value={index}
                    checked={selectedOptions[currentQuestionIndex] === index}
                    onChange={() => handleOptionChange(index)}
                    className="mr-2"
                  />
                  <label htmlFor={`option-${currentQuestionIndex}-${index}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>
          <hr></hr>
          <div className="flex justify-between">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-3 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              className="px-3 bg-blue-500 text-white rounded"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
