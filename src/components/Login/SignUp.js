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
  navigate('/');

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

  if ( user || gUser ) {
    console.log(user || gUser);
  }

  const onSubmit = async (data) => {
    console.log('Form Data: ',data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    
  };
  return (
    <div className='signup-form-container'>
      <h2 className=''>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=''>
          <label className=''>
            <span className=''>Name</span>
          </label>
          <input
            type='text'
            placeholder='Your Name'
            className=''
            {...register('name', {
              required: {
                value: true,
                message: 'Name is Required',
              },
            })}
          />
          <label className=''>
            {errors.name?.type === 'required' && (
              <span className=''>{errors.name.message}</span>
            )}
          </label>
        </div>

        <div className=''>
          <label className=''>
            <span className=''>Email</span>
          </label>
          <input
            type='email'
            placeholder='Your Email'
            className=''
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
            <span className=''>Password</span>
          </label>
          <input
            type='password'
            placeholder='Password'
            className=''
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
        <input className='' type='submit' value='Sign Up' />
      </form>
      <p>
        <small>
          Already have an account?{' '}
          <Link className='' to='/login'>
            Please login
          </Link>
        </small>
      </p>
      <div className=''>OR</div>
      <button onClick={() => signInWithGoogle()} className='text-dark'>
        Continue with Google
      </button>
    </div>
  );
};

export default SignUp;
