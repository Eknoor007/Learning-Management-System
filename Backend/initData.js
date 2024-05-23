const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lms', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Schemas
const pdfSchema = new mongoose.Schema({
  title: String,
  url: String
});

const pptSchema = new mongoose.Schema({
  title: String,
  url: String
});

const videoSchema = new mongoose.Schema({
  title: String,
  url: String
});

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctOption: Number
});

const assignmentSchema = new mongoose.Schema({
  question: String,
  answers: [String]
});

// Define Models
const PDF = mongoose.model('PDF', pdfSchema);
const PPT = mongoose.model('PPT', pptSchema);
const Video = mongoose.model('Video', videoSchema);
const Question = mongoose.model('Question', questionSchema);
const Assignment = mongoose.model('Assignment', assignmentSchema);

const initData = async () => {
  await PDF.deleteMany({});
  await PPT.deleteMany({});
  await Video.deleteMany({});
  await Question.deleteMany({});
  await Assignment.deleteMany({});

  // Initialize PDFs
  const pdfs = [
    { title: 'React Native Guide', url: 'http://localhost:4000/assets/React-Native-Guide.pdf' }
  ];
  await PDF.insertMany(pdfs);

  // Initialize PPTs
  const ppts = [
    { title: 'React Native Presentation', url: 'https://docs.google.com/presentation/d/1SuLq6RClo80dmQP-iXw9W12OzJJCXSln/embed?start=false&loop=false&delayms=3000' }
  ];
  await PPT.insertMany(ppts);

  // Initialize Videos
  const videos = [
    { title: 'React Native Introduction', url: 'https://www.youtube.com/embed/0-S5a0eXPoc' },
    { title: 'React Native Components', url: 'https://www.youtube.com/embed/ZBCUegTZF7M' }
  ];
  await Video.insertMany(videos);

  // Initialize Questions for Quiz
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
  await Question.insertMany(questions);

  // Initialize Assignments
  const assignments = [
    { question: 'What is the purpose of the useState hook in React Native?', answers: [] },
    { question: 'Can you explain how to use the fetch function to make API calls in React Native?', answers: [] },
    { question: 'What is the difference between props and state in React Native?', answers: [] },
    { question: 'What is the significance of the render method in a React Native component?', answers: [] },
    { question: 'How do you apply styles in React Native?', answers: [] },
    { question: 'How would you handle errors in a React Native application?', answers: [] },
    { question: 'Can you explain how to use the useEffect hook in React Native?', answers: [] }
  ];
  await Assignment.insertMany(assignments);

  console.log('Data initialization complete');
  mongoose.connection.close();
};

initData().catch(err => {
  console.error('Data initialization error:', err);
  mongoose.connection.close();
});
