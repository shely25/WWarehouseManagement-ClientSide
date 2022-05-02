import React from 'react';
import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import './SocialLogIn.css'

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    let errorElement;
    if (error || error1) {
        errorElement = error?.message || error1?.message

    }
    if (user || user1) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ border: '1px solid blue', width: '150px', borderRadius: '4px' }}></div>
                <p style={{ margin: '1px 8px 0 8px' }}>Or</p>
                <div style={{ border: '1px solid blue', width: '150px', borderRadius: '4px' }}></div>
            </div>
            <p>{errorElement}</p>
            <div className='Width'>
                <GoogleLoginButton onClick={() => signInWithGoogle()} />
                <GithubLoginButton onClick={() => signInWithGithub()} />
            </div>
        </div >


    );
};

export default SocialLogIn;