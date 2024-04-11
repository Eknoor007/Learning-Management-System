import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import style from  './CSS Module/Style.module.css'
import img1 from './assets/Login.jpg'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <>
    <div className={`${style.bglogin}`}>
      <Card className={`${style.card}`}>
        <Card.Body>
          <Row>
            <Col className='pt-4'>
            <img src={img1}/>
            </Col>
            <Col>
              <Form>
                <h3>Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted text-small">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                  <Form.Text>
                    <Link to="/SignUp">
                    <Button variant="link">Do not have an account?</Button>
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
