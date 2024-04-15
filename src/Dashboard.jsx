import React, { useState } from 'react'
import Navbar from './Navbar'
import Button from 'react-bootstrap/Button';
import { Card, Form } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import Banner from './assets/Banner.png'
import style from './CSS Module/Dashboard.module.css'
import ReactThumbnail from './assets/React.png'
import MernThumbnail from './assets/Mern.png'
import JsThumbnail from './assets/js.png'
import WebThumbnail from './assets/Web.png'
import FrontendThumbnail from './assets/Frontend.png'
import BackendThumbnail from './assets/Backend.png'
import StarRating from './StarRating.jsx';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const courses = [
    { title: "The Ultimate React Native Guide", image: ReactThumbnail },
    { title: "The Ultimate Mern Stack Mastery Guide", image: MernThumbnail},
    { title: "The Ultimate React.js Mastery Guide", image: JsThumbnail },
    { title: "2024 Blockchain Developer", image: WebThumbnail},
    { title: "2024 Front-End Developer", image: FrontendThumbnail},
    { title: "2024 Back-End Developer", image: BackendThumbnail},
  ];
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className={style.background}>
        <img src={Banner} className={style.banner} />
        <Form className={style.form}>
          <Form.Control
            type="search"
            placeholder="Search the courses"
            className="me-2 p-3"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Form>
      </div>
      <center>
        <h1 className='mt-4'> Popular  Courses </h1>
      </center>
      <hr></hr>
      <Row>
        {filteredCourses.map((courses, index) => (
          <Col key={index}>
          <Card style={{ width: '20rem', margin: '20px', top: '40px', left: '15px' }}>
            <Card.Img variant="top" src={courses.image} />
            <Card.Body>
              <Card.Title>{courses.title}</Card.Title>
              <Link to={"/content"}>
              <Button variant="primary">Go to the course</Button>
              </Link>
              <StarRating />
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </>
  )
}
