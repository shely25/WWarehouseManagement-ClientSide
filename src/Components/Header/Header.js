import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to='/home'>Fasion Franzy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='/home#inventory'>Inventory</Nav.Link>
                            <Nav.Link as={Link} to="Blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} to='/ManageItem'>Manage Item</Nav.Link>
                                        <Nav.Link as={Link} to='/AddNewItem'>Add New Item</Nav.Link>
                                        <Nav.Link as={Link} to='/MyItem'>My Item</Nav.Link>
                                        <button className='border-0 btn' onClick={handleSignout}>Sign Out</button>
                                    </>
                                    :
                                    <Nav.Link as={Link} to='/LogIn'>Log In</Nav.Link>
                            }
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