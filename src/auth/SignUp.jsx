import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import useToken from '../hooks/useToken';
import SocialLogin from './SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [passShow, setPassShow] = useState(false);
    const [confirmPassShow, setConfirmPassShow] = useState(false);
    const [updateProfile, updating, UpdateProfileError] = useUpdateProfile(auth);

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);


    // for jwt
    const [token] = useToken(user);

    // for jwt


    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    if (token) {
        navigate('/')
    }
    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password, data.number);
        await updateProfile({
            displayName: data.userName,
        })

    };

    if (token) {
        navigate('/')
    }
    useEffect(() => {
        if (user) {
            toast.success('SignUP success...')
            navigate(from, { replace: true })
        }
    }, [user, navigate, from])
    if (loading || updating) {
        return <p>Loading...</p>

    };
    if (error || UpdateProfileError) {
        toast.error(error?.message)
    }

    return (
        <div className="w-full bg-white pb-16 px-4">
            <div className="flex justify-center items-center">
                <div className="w-96 shadow-2xl rounded-xl p-10 mt-16">
                    <p className="text-3xl mb-6 text-center font-extrabold leading-6 text-gray-800">
                        SignUp
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <lable className="text-sm font-medium leading-none text-gray-800 relative">Name</lable>
                            <input {...register("userName")} aria-label="enter email adress" type="text" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            {/* {errors.email && <small className='text-red-500'>Email is required!!</small>} */}
                        </div>
                        <div className='mt-6'>
                            <lable className="text-sm font-medium leading-none text-gray-800 relative">Email <span className='text-red-500 absolute top-0 '>&#10035;</span></lable>
                            <input {...register("email", { required: true })} aria-label="enter email adress" type="email" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            {errors.email && <small className='text-red-500'>Email is required!!</small>}
                        </div>
                        <div className="mt-6  w-full">
                            <lable className="text-sm font-medium leading-none text-gray-800 relative">Contact Number <span className='text-red-500 absolute top-0 '>&#10035;</span></lable>
                            <input {...register("number", { required: true })} aria-label="enter email adress" type="text" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                            {errors.number && <small className='text-red-500'>Phone number is required!!</small>}
                        </div>
                        <div className="mt-6  w-full">
                            <lable className="text-sm font-medium leading-none text-gray-800 relative">Password <span className='text-red-500 absolute top-0 '>&#10035;</span></lable>
                            <div className="relative flex items-center justify-center">
                                {
                                    passShow === false ?
                                        <>
                                            <input {...register("password", { required: true })} aria-label="enter Password" type='password' className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                        </>
                                        :
                                        <>
                                            <input {...register("password", { required: true })} aria-label="enter Password" type="text" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                        </>
                                }
                                <div onClick={() => setPassShow(!passShow)} className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    {
                                        passShow === false ?
                                            <FaEyeSlash size={20} />
                                            :
                                            <FaEye size={20} />
                                    }
                                </div>
                            </div>
                            {errors.password && <small className='text-red-500'>Password is required!!</small>}
                        </div>
                        <div className="mt-6  w-full">
                            <lable className="text-sm font-medium leading-none text-gray-800 relative">Confirm Password <span className='text-red-500 absolute top-0 '>&#10035;</span></lable>
                            <div className="relative flex items-center justify-center">
                                {
                                    confirmPassShow === false ?
                                        <>
                                            <input {...register("confirmPassword", { required: true })} aria-label="enter Password Again" type='password' className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                        </>
                                        :
                                        <>
                                            <input {...register("confirmPassword", { required: true })} aria-label="enter Password" type="password" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                        </>
                                }
                                <div onClick={() => setConfirmPassShow(!confirmPassShow)} className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    {
                                        confirmPassShow === false ?
                                            <FaEyeSlash size={20} />
                                            :
                                            <FaEye size={20} />
                                    }
                                </div>
                            </div>
                            {errors.password && <small className='text-red-500'>Password is required!!</small>}
                        </div>
                        <div className="mt-8">
                            <input type={'submit'} aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 btn bg-primary border-none hover:bg-neutral  text-md font-semibold leading-none text-base-100 focus:outline-none rounded  py-4 w-full cursor-pointer" value={'SignUp'} />
                        </div>
                        <p className="text-sm text-center mt-4 font-medium leading-none text-gray-500">
                            Already have account?{" "}
                            <Link to={'/Signin'} className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                                SignIn here
                            </Link>
                        </p>
                    </form>
                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">Or</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>

                    {/* social login  */}
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignUp;