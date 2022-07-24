import React from 'react';

const Login = () => {

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    // Signin With Email & Password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // onSubmit Function
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
  return (
    <div>
      
    </div>
  );
};

export default Login;