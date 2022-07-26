import React, { useEffect } from 'react';
import './SignUp.css';
// import Loading from '../Shared/Loading/Loading';
import Loading from '../Shared/Loading/Loading';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../../assets/google.svg';

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className=''>
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  if (user || gUser) {
    console.log(user || gUser);
  }

  const onSubmit = async (data) => {
    console.log('Form Data: ', data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className='signup-form-container'>
      <div className='card border-0 signUpForm w-50'>
        <h2 className='my-4 text-uppercase text-center'>Sign Up</h2>
        {/* form start */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=''>
            <input
              type='text'
              placeholder='Your Name'
              className='w-50 p-2 ps-4 border-0 rounded rounded-pill'
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is Required',
                },
              })}
            />
            {/* Error Message Portion  */}
            <br />
            <div>
              <label className='py-1'>
                {errors.name?.type === 'required' && (
                  <span className=''>{errors.name.message}</span>
                )}
              </label>
            </div>
          </div>

          <div className=''>
            <input
              type='email'
              placeholder='Your Email'
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
                  <span className='text-dark'>{errors.email.message}</span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span className=''>{errors.email.message}</span>
                )}
              </label>
            </div>
          </div>
          <div className=''>
            <input
              type='password'
              placeholder='Password'
              className='w-50 p-2 ps-4 border-0 rounded rounded-pill'
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
              <label className=''>
                {errors.password?.type === 'required' && (
                  <span className=''>{errors.password.message}</span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className=''>{errors.password.message}</span>
                )}
              </label>
            </div>
          </div>

          {signInError}

          {/* SignUp Button */}
          <input className='signUp-btn mx-auto mb-3 fw-bold' type='submit' value='Sign Up' />
        </form>
        {/* Form End */}

        {/* New User Option Start */}
        <p className='mb-0 text-center'>
          <small>
            Already have account?{' '}
            <Link
              className='text-color text-decoration-none fw-bold'
              to='/login'
            >
              Login
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
          <img src={googleIcon} alt='' className='' />
          <span className='ps-2 text-white fw-bold'>Google Signin</span>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
