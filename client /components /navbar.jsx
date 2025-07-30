import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function MainNavbar() {
  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    window.location.href = '/';
  };

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

            {userInfo ? (
              <>
                <Nav.Link href="/dashboard">
                  👋 {userInfo.name?.split(' ')[0]}
                </Nav.Link>
                <Button variant="outline-dark" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
