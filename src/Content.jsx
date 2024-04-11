import React from 'react'
import Navbar from './Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import { Card, Row, Col } from 'react-bootstrap'
import style from './CSS Module/Content.module.css'
import PdfViewer from './PdfViewer'

export default function Content() {
  return (
    <>
    <Navbar/>
    <div  className="d-flex">
    <h5 className='m-4' style={{textShadow: "3px 3px 3px violet"}}>The Ultimate React Native Guide</h5>
    <Dropdown className='mt-3'>
      <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
        Difficulty Level
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Beginner Level</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Intermidiate Level</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Advanced Level</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    <div className="d-flex">
    <Col className='col-3'>
    <Card className={`${style.card}`}>
        <Card.Body >
        <ul class="list-group list-group-flush mt-3 bg-dark text-white">
            <li class="list-group-item d-flex justify-content-between align-items-center fs-6 fw-bold ">Guide 1</li>
            <li class="list-group-item d-flex justify-content-between align-items-center fs-6 fw-bold">Assignment 1</li>
            <li class="list-group-item d-flex justify-content-between align-items-center fs-6 fw-bold">Guide 2</li>
            <li class="list-group-item d-flex justify-content-between align-items-center fs-6 fw-bold">Assignment 2</li>
            <li class="list-group-item d-flex justify-content-between align-items-center fs-6 fw-bold">Quiz 1</li>
            <li class="list-group-item d-flex justify-content-between align-items-center fs-6 fw-bold">Module 1</li>
            <li class="list-group-item d-flex justify-content-between align-items-center fs-6 fw-bold">Quiz 2</li>
            <li class="list-group-item d-flex justify-content-between align-items-center fs-6 fw-bold">Module 2</li>
        </ul>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Row>
        <Card>
            <Card.Title className='mt-4 mx-4'> The Ultimate React Native Guide </Card.Title>
            <hr></hr>
            <Card.Body>
                <h3 className='mx-4 linear bg-gradient-to-r from-purple-800 via-cyan-600 to-violet-700 inline-block text-transparent bg-clip-text'> Guide 1</h3>
                <PdfViewer/>
            </Card.Body>
        </Card>
    </Row>
    </Col>
    </div>
    </>
  )
}
