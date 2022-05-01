import React from 'react';
import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    let errorElement;
    if (error || error1) {
        errorElement = <div>
            <p className='text-center text-danger'>Error: {error.message}</p>
        </div>
    }
    if (user || user1) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div style={{ border: '1px solid blue', width: '150px', borderRadius: '4px' }}></div>
                    <p style={{ margin: '1px 8px 0 8px' }}>Or</p>
                    <div style={{ border: '1px solid blue', width: '150px', borderRadius: '4px' }}></div>
                </div>
                {errorElement}
                <GoogleLoginButton onClick={() => signInWithGoogle()} className='w-25 mx-auto my-3' />
                <GithubLoginButton onClick={() => signInWithGithub()} className='w-25 mx-auto' />
            </div >

        </div >
    );
};

export default SocialLogIn;