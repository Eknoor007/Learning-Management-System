const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

mongoose.connect('mongodb://localhost:27017/lms', { useNewUrlParser: true, useUnifiedTopology: true });

const courseSchema = new mongoose.Schema({
  title: String,
  image: String
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const Course = mongoose.model('Course', courseSchema);
const User = mongoose.model('User', userSchema);

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

app.get('/adminpanel', (req, res) => {
  res.render('AdminPanel'); // Render the Handlebars template
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
