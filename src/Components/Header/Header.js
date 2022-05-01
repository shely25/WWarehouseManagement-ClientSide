import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Fasion Franzy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/Inventory'>Inventory</Nav.Link>
                            <Nav.Link as={Link} to="Blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/LogIn'>Log In</Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to='Register'>
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;