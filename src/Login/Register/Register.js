import React from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Loading from '../../Assignment/Loading/Loading';
import auth from '../../firebase.init';


const Register = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    let signInErrorMessage;

    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    if (error || googleError) {
        signInErrorMessage = <p className='text-red'>{error?.message || googleError?.message}</p>
    }

    if (user || googleUser) {
        console.log(user || googleUser);
    }

    const onSubmit = data => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.password);
    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl   font-bold">Register</h2>

                    {/* react hook form */}

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {error?.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                {error?.name?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}


                            </label>
                        </div>
                        {/* email filed */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide a valid email'
                                    }
                                })}
                            />
                            <label class="label">
                                {error?.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                {error?.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>
                        {/* password filed */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label class="label">
                                {error?.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                                {error?.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


                            </label>
                        </div>

                        {signInErrorMessage}

                        <input className='btn w-full text white max-w-xs' type="submit" value="Register" />
                    </form>
                    <p className='font-bold mt-5 text-slate-700'>Already Have an Account? <Link className='text-sky-500' to="/login">Please Log In </Link></p>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;