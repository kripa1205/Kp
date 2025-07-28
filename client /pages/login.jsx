import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Form, Button } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      const handleLogin = (e) => {
          e.preventDefault();
              // Placeholder login logic — replace with real API
                  alert(`Logged in as: ${email}`);
                    };

                      return (
                          <>
                                <Navbar />
                                      <Container className="my-5" style={{ maxWidth: '500px' }}>
                                              <h3 className="mb-4">Login</h3>
                                                      <Form onSubmit={handleLogin}>
                                                                <Form.Group className="mb-3">
                                                                            <Form.Label>Email address</Form.Label>
                                                                                        <Form.Control 
                                                                                                      type="email" 
                                                                                                                    placeholder="Enter email"
                                                                                                                                  value={email}
                                                                                                                                                onChange={(e) => setEmail(e.target.value)} 
                                                                                                                                                              required 
                                                                                                                                                                          />
                                                                                                                                                                                    </Form.Group>

                                                                                                                                                                                              <Form.Group className="mb-4">
                                                                                                                                                                                                          <Form.Label>Password</Form.Label>
                                                                                                                                                                                                                      <Form.Control 
                                                                                                                                                                                                                                    type="password" 
                                                                                                                                                                                                                                                  placeholder="Password"
                                                                                                                                                                                                                                                                value={password}
                                                                                                                                                                                                                                                                              onChange={(e) => setPassword(e.target.value)} 
                                                                                                                                                                                                                                                                                            required 
                                                                                                                                                                                                                                                                                                        />
                                                                                                                                                                                                                                                                                                                  </Form.Group>

                                                                                                                                                                                                                                                                                                                            <Button variant="dark" type="submit" className="w-100">
                                                                                                                                                                                                                                                                                                                                        Login
                                                                                                                                                                                                                                                                                                                                                  </Button>
                                                                                                                                                                                                                                                                                                                                                          </Form>

                                                                                                                                                                                                                                                                                                                                                                  <p className="mt-3 text-center">
                                                                                                                                                                                                                                                                                                                                                                            Don’t have an account? <a href="/signup">Sign up</a>
                                                                                                                                                                                                                                                                                                                                                                                    </p>
                                                                                                                                                                                                                                                                                                                                                                                          </Container>
                                                                                                                                                                                                                                                                                                                                                                                                <Footer />
                                                                                                                                                                                                                                                                                                                                                                                                    </>
                                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                                                                                                                                      export default Login;