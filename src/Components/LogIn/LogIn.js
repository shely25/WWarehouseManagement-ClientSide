import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(
        auth
    );
    let errorElement2
    if (error || error2) {
        errorElement2 = error?.message || error2?.message
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handleLogin = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    const handleResetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast("Email send")
    }
    return (
        <div>
            <h1 className='text-center mt-5'>Log In</h1>
            <Form onSubmit={handleLogin} className='w-25 mx-auto' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <input className='btn btn-primary' type="submit" value="Log In" />
            </Form>
            <p> {errorElement2}</p>
            <p className='text-center my-2'>Are you new here?<Link className='text-decoration-none' to='/Register'>Please Register</Link></p>
            <p className='text-center my-2'>Forgate Password?<button onClick={handleResetPassword} className='btn btn-link text-decoration-none'>Reset Password</button></p>
            <SocialLogIn></SocialLogIn>
            <ToastContainer />
        </div>
    );
};

export default LogIn;