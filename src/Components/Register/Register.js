import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let errorElement1
    if (error) {
        errorElement1 = <div>
            <p className='text-center text-danger'>Error: {error.message}</p>
        </div>
    }
    const handleRegister = event => {
        event.preventDefault()
        createUserWithEmailAndPassword(email, password)
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token)
                console.log(data.token)

            })
        navigate(from, { replace: true });
    }
    return (
        <div>
            <h1 className='text-center mt-5'>Register</h1>
            <Form onSubmit={handleRegister} className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} type="password" onChange={e => setPassword(e.target.value)}
                        placeholder="Password" required />
                </Form.Group>
                <input className='btn btn-primary' type="submit" value="Register" />
            </Form>
            {errorElement1}
            <p className='text-center my-2'>Already have an account?<Link to='/LogIn' className='text-decoration-none'>Please Log In</Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Register;