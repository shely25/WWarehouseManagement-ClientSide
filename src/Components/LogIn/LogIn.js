import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>Log In</h1>
            <Form className='w-25 mx-auto' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <p className='text-center my-2'>Are you new here?<Link className='text-decoration-none' to='/Register'>Please Register</Link></p>
            <p className='text-center my-2'>Forgate Password?<button className='btn btn-link text-decoration-none'>Reset Password</button></p>
        </div>
    );
};

export default LogIn;