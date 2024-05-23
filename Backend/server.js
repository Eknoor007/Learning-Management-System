const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

mongoose.connect('mongodb://localhost:27017/lms', { useNewUrlParser: true, useUnifiedTopology: true });

// Defining Schemas

const courseSchema = new mongoose.Schema({
  title: String,
  image: String
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});


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

//Defining Models

const Course = mongoose.model('Course', courseSchema);
const User = mongoose.model('User', userSchema);
const PDF = mongoose.model('PDF', pdfSchema);
const PPT = mongoose.model('PPT', pptSchema);
const Video = mongoose.model('Video', videoSchema);
const Question = mongoose.model('Question', questionSchema);
const Assignment = mongoose.model('Assignment', assignmentSchema);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Serve static files from the "assets" directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Define the path to the views directory
const viewsPath = path.join(__dirname, 'views');

// Set the view engine and views directory
app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (user) {
      res.json({ message: 'Login successful!' });
  } else {
      res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
      }

      const newUser = new User({ email, password });
      await newUser.save();
      res.json({ message: 'Sign-up successful!' });
  } catch (error) {
      res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
});

// Course Endpoints
app.get('/courses', async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

app.post('/courses', async (req, res) => {  
  const { title, image } = req.body;
  const newCourse = new Course({ title, image });
  await newCourse.save();
  res.json({ message: 'Course added successfully', course: newCourse });
});

// Admin Panel Endpoint
app.get('/adminpanel', (req, res) => {
  res.render('AdminPanel'); // Render the Handlebars template
});

// Endpoints for PDFs, PPTs, Videos, Assignments, and Quizzes
app.get('/pdfs', async (req, res) => {
  const pdfs = await PDF.find();
  res.json(pdfs);
});

app.get('/ppts', async (req, res) => {
  const ppts = await PPT.find();
  res.json(ppts);
});

app.get('/videos', async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

app.get('/questions', async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
});

app.get('/assignments', async (req, res) => {
  const assignments = await Assignment.find();
  res.json(assignments);
});

app.post('/assignments', async (req, res) => {
  const { question, answers } = req.body;
  const newAssignment = new Assignment({ question, answers });
  await newAssignment.save();
  res.json({ message: 'Assignment submitted successfully', assignment: newAssignment });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
