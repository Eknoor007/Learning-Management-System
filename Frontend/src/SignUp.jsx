import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import style from  './CSS Module/Style.module.css'
import img1 from './assets/Login.jpg'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <>
    <div className={`${style.bglogin}`}>
      <Card className={`${style.card2}`}>
        <Card.Body>
          <Row>
            <Col className='pt-5'>
            <center>
            <img src={img1}/>
            </center>
            </Col>
            <Col>
              <Form>
                <h3>SignUp</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                  <Form.Text>
                    <Link to={"/"}>
                    <Button variant="link">Have an account? Sign-In</Button>
                    </Link>
                  </Form.Text>
                </Form.Group>
                <Link to={"/dashboard"}>
                <Button variant="outline-primary">Submit</Button>{' '}
                </Link>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      </div>
    </>
  )
}
