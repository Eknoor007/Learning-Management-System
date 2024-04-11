import React from 'react'
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
          />
          <Button variant="primary"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg></Button>
        </Form>
      </div>
      <center>
        <h1 className='mt-4'> Popular  Courses </h1>
      </center>
      <hr></hr>
      <Row>
        <Col>
          <Card style={{ width: '20rem', margin: '20px', top: '40px', left: '15px' }}>
            <Card.Img variant="top" src={ReactThumbnail} />
            <Card.Body>
              <Card.Title>The Ultimate React Native Guide</Card.Title>
              <Link to={"/content"}>
              <Button variant="primary">Go to the course</Button>
              </Link>
              <StarRating />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem', margin: '20px', top: '40px', left: '15px' }}>
            <Card.Img variant="top" src={MernThumbnail} />
            <Card.Body>
              <Card.Title>The Ultimate Mern Stack Mastery Guide</Card.Title>
              <Link to={"/content"}>
              <Button variant="primary">Go to the course</Button>
              </Link>
              <StarRating />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem', margin: '20px', top: '40px', left: '15px' }}>
            <Card.Img variant="top" src={JsThumbnail} />
            <Card.Body>
              <Card.Title>The Ultimate React.js Mastery Guide</Card.Title>
              <Link to={"/content"}>
              <Button variant="primary">Go to the course</Button>
              </Link>
              <StarRating />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <center>
        <h1 className='mt-5'> Useful Roadmap Guides</h1>
      </center>
      <hr></hr>
      <Row>
        <Col>
          <Card style={{ width: '20rem', margin: '20px', top: '70px', left: '15px' }}>
            <Card.Img variant="top" src={WebThumbnail} />
            <Card.Body>
              <Card.Title>2024 Blockchain Developer</Card.Title>
              <Link to={"/content"}>
              <Button variant="primary">Go to the course</Button>
              </Link>
              <StarRating />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem', margin: '20px', top: '70px', left: '15px' }}>
            <Card.Img variant="top" src={FrontendThumbnail} />
            <Card.Body>
              <Card.Title>2024 Front-End Developer</Card.Title>
              <Link to={"/content"}>
              <Button variant="primary">Go to the course</Button>
              </Link>
              <StarRating />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '20rem', margin: '20px', top: '70px', left: '15px' }}>
            <Card.Img variant="top" src={BackendThumbnail} />
            <Card.Body>
              <Card.Title>2024 Back-End Developer</Card.Title>
              <Link to={"/content"}>
              <Button variant="primary">Go to the course</Button>
              </Link>
              <StarRating />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}
