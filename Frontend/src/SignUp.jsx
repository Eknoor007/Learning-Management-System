import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import style from './CSS Module/Style.module.css'
import img1 from './assets/Login.jpg'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        navigate('/dashboard');
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <div className={`${style.bglogin}`}>
        <Card className={`${style.card2}`}>
          <Card.Body>
            <Row>
              <Col className='pt-5'>
                <center>
                  <img src={img1} />
                </center>
              </Col>
              <Col>
                <Form onSubmit={handleSubmit}>
                  <h3>SignUp</h3>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                  <Form.Text>
                    <Link to={"/"}>
                      <Button variant="link">Have an account? Sign-In</Button>
                    </Link>
                  </Form.Text>
                </Form.Group>
                <Button variant="outline-primary" type="submit">Submit</Button>{' '}
              </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
