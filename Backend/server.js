const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 4000;

let courses = [
  { id: 1, title: "The Ultimate React Native Guide", image: "https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/a1d055e8-6660-4e04-a94f-9397516c5766.png" },
  { id: 2, title: "The Ultimate Mern Stack Mastery Guide", image: "https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/a1d055e8-6660-4e04-a94f-9397516c5766.png" },
  { id: 3, title: "The Ultimate React.js Mastery Guide", image: "https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/a1d055e8-6660-4e04-a94f-9397516c5766.png" },
  { id: 4, title: "2024 Blockchain Developer", image: "https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/a1d055e8-6660-4e04-a94f-9397516c5766.png" },
  { id: 5, title: "2024 Front-End Developer", image: "https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/a1d055e8-6660-4e04-a94f-9397516c5766.png" },
  { id: 6, title: "2024 Back-End Developer", image: "https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/a1d055e8-6660-4e04-a94f-9397516c5766.png" },
];

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define the path to the views directory
const viewsPath = path.join(__dirname, 'views');

// Set the view engine and views directory
app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Hardcoded credentials for demonstration purposes
    const hardcodedEmail = 'user@example.com';
    const hardcodedPassword = 'password';

    if (email === hardcodedEmail && password === hardcodedPassword) {
        res.json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.post('/courses', (req, res) => {
  const { title, image } = req.body;
  const newCourse = {
      id: courses.length + 1,
      title,
      image
  };
  courses.push(newCourse);
  res.json({ message: 'Course added successfully', course: newCourse });
});

app.get('/adminpanel', (req, res) => {
  res.render('AdminPanel'); // Render the Handlebars template
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
