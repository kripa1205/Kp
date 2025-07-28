import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function MainNavbar() {
  return (
      <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                    <Navbar.Brand href="/" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600' }}>
                              Rose Luxe
                                      </Navbar.Brand>
                                              <Navbar.Toggle />
                                                      <Navbar.Collapse>
                                                                <Nav className="ms-auto">
                                                                            <Nav.Link href="/">Home</Nav.Link>
                                                                                        <Nav.Link href="/products">Shop</Nav.Link>
                                                                                                    <Nav.Link href="/cart">Cart</Nav.Link>
                                                                                                                <Nav.Link href="/login">Login</Nav.Link>
                                                                                                                          </Nav>
                                                                                                                                  </Navbar.Collapse>
                                                                                                                                        </Container>
                                                                                                                                            </Navbar>
                                                                                                                                              );
                                                                                                                                              }

                                                                                                                                              export default MainNavbar;