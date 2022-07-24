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
      <div className='border-0'>
        {/* Main Input & Text form Container */}
        <div className='card text-center loginForm w-50'>
          <h2 className='my-4 text-uppercase'>Login</h2>
          {/* form start */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mx-auto'>
              <label className=''>
                {/* <span className='pe-2'>Email:</span> */}
              </label>
              <input
                type='email'
                placeholder='EMAIL'
                className='w-50 my-3 p-2 ps-4 border-0 rounded rounded-pill'
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
              <label className=''>
                {errors.email?.type === 'required' && (
                  <span className=''>{errors.email.message}</span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span className=''>{errors.email.message}</span>
                )}
              </label>
            </div>
            <div className=''>
              <label className=''>
                {/* <span className=' pe-2'>Password:</span> */}
              </label>
              <input
                type='password'
                placeholder='PASSWORD'
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
              <label className=''>
                {errors.password?.type === 'required' && (
                  <span className=''>{errors.password.message}</span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className=''>{errors.password.message}</span>
                )}
              </label>
            </div>

            {signInError}
            <input
              className='login-btn mx-auto my-3'
              type='submit'
              value='LOGIN'
            />
          </form>
          {/* Form End */}

          {/* New User Option Start */}
          <p className='mb-0'>
            <small>
              New to Onlie Shop?{' '}
              <Link
                className='text-primary text-decoration-none fw-bold'
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
            className='google-login-btn mx-auto mb-4 text-uppercase'
          >
            <img src={googleIcon} alt="" className='' />
            <span className='ps-2'>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
