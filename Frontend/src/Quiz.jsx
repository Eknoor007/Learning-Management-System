import React, { useEffect, useState } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  
  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
        setSelectedOptions(Array(data.length).fill(null));
      })
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

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
          {questions.length > 0 ? (
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
          ) : (
            <p>Loading questions...</p>
          )}
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
