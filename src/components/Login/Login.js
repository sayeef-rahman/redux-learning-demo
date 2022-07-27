import React, { useEffect } from 'react';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import auth from '../../firebase.init';

import googleIcon from '../../assets/google.svg';
import './Login.css';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // Signin With Email & Password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  //Auth Console
  console.log('User Info:',auth);

  //Navigate after Login
  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, from, navigate]);

  // onSubmit Function
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className='loginForm-Container'>
      {/* Main Input & Text form Container */}
      <div className='card border-0 loginForm w-50'>
          <h2 className='my-4 text-uppercase text-center'>Login</h2>
          {/* form start */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mx-auto'>
              <input
                type='email'
                placeholder='Email'
                className='w-50 p-2 ps-4 border-0 rounded rounded-pill'
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is Required',
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email',
                  },
                })}
              />
              {/* Error Message Portion  */}
              <br />
              <div>
                <label className=''>
                  {errors.email?.type === 'required' && (
                    <span className=''>{errors.email.message}</span>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <span className=''>{errors.email.message}</span>
                  )}
                </label>
              </div>
            </div>
            <div className=''>
              <label className=''>
                {/* <span className=' pe-2'>Password:</span> */}
              </label>
              <input
                type='password'
                placeholder='Password'
                className='w-50 mb-3 p-2 ps-4 border-0 rounded rounded-pill'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is Required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer',
                  },
                })}
              />

              {/* Error Message Portion  */}
              <br />
              <div>
                <label className='text-danger'>
                  {errors.password?.type === 'required' && (
                    <p className='text-start'>{errors.password.message}</p>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <p className=''>{errors.password.message}</p>
                  )}
                </label>
              </div>
            </div>

            {signInError}

            {/* Login Button */}
            <input
              className='login-btn mx-auto mb-3'
              type='submit'
              value='Login'
            />
          </form>
          {/* Form End */}

          {/* New User Option Start */}
          <p className='mb-0 text-center'>
            <small>
              New to Onlie Shop?{' '}
              <Link
                className='text-color text-decoration-none fw-bold'
                to='/signup'
              >
                Create New Account
              </Link>
            </small>
          </p>

          {/* Options */}
          <div className='d-flex justify-content-center align-items-center my-2'>
            <hr className='border border-dark w-25 mx-6' />
            <span className='mx-3'>OR</span>
            <hr className='border border-dark w-25' />
          </div>

          {/* Signinwith Google Button */}
          <button
            onClick={() => signInWithGoogle()}
            className='google-login-btn mx-auto mb-4'
          >
            <img src={googleIcon} alt='' id='google-icon' />
            <span className='ps-2 text-white'>Google Signin</span>
          </button>
        </div>
    </div>
  );
};

export default Login;
