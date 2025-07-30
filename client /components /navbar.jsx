import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function MainNavbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${searchTerm}`);
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600' }}>
          Ivory Step
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Shop</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>

          <Form className="d-flex me-3" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" variant="outline-dark">
              Search
            </Button>
          </Form>

          {userInfo ? (
            <>
              <Nav.Link href="/dashboard">
                {userInfo.name?.split(' ')[0]}
              </Nav.Link>
              <Button variant="outline-dark" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Nav.Link href="/login">Login</Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
