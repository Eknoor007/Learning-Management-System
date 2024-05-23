import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import style from './CSS Module/Style.module.css'
import img1 from './assets/Login.jpg'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect to dashboard on successful login
        navigate('/dashboard');
        console.log("Email: " + email)
        console.log("Password: " + password)
      } else {
        // Show error message on login failure
        setError(result.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <div className={`${style.bglogin}`}>
        <Card className={`${style.card}`}>
          <Card.Body>
            <Row>
              <Col className='pt-4'>
                <img src={img1} />
              </Col>
              <Col>
                <Form onSubmit={handleSubmit}>
                  <h3>Login</h3>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" name='email' id='email' value={email} placeholder="Enter email" onChange={(e) => {
                      console.log(e.target.value)
                      setEmail(e.target.value)
                    }} />
                    <Form.Text className="text-muted text-small">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name='password' id='password' value={password} placeholder="Password" onChange={(e) => {
                      console.log(e.target.value)
                      setPassword(e.target.value)
                    }} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                    <Form.Text>
                      <Link to="/SignUp">
                        <Button variant="link">Do not have an account?</Button>
                      </Link>
                    </Form.Text>
                  </Form.Group>
                  <Button variant="outline-primary" type='sumbit'>Submit</Button>{' '}
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
