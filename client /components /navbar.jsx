import React from 'react';
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap';

function MainNavbar() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    window.location.href = '/';
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand
          href="/"
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600', fontSize: '1.5rem' }}
        >
          Rose Luxe
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="align-items-center">
          <Nav className="ms-auto me-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Shop</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>

            {userInfo ? (
              <>
                <Nav.Link href="/dashboard">👋 <i>{userInfo.name.split(' ')[0]}</i></Nav.Link>
                <Button variant="outline-dark" size="sm" onClick={handleLogout} className="ms-2">
                  Logout
                </Button>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex w-100 mt-2 mt-lg-0">
            <FormControl
              type="search"
              placeholder="Search for luxury footwear..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
