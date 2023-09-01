import { useForm } from 'react-hook-form';
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

    const { register,
        handleSubmit,
        formState : {errors} } = useForm();
    const { signup, isAuthenticathed, errors : RegisterErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticathed) navigate('/tasks');
    }, [isAuthenticathed, navigate])

    const onSubmited = handleSubmit(async (values) => {
        signup(values);
    })

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className='bg-zinc-800 max-w-md p-10 rounded-md'>

            {
                RegisterErrors.map((error, i) => (
                    <div className='bg-red-500 text-white p-2 my-2' key={i}>
                        { error }
                    </div>
                ))
            }

                <form onSubmit={onSubmited}>

                    <input type="text" {...register("username", {required:true}) } placeholder='Username' className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' />

                    {
                        errors.username && <p className='text-red-500'>Username is Required</p>
                    }

                    <input type="email" {...register("email", {required:true}) } placeholder='Email' className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' />
                    
                    {
                        errors.email && <p className='text-red-500'>Email is Required</p>
                    }

                    <input type="password" {...register("password", {required:true}) } placeholder='Password' className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' />

                    {
                        errors.password && <p className='text-red-500'>Password is Required</p>
                    }

                    <button type="submit" className="bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 rounded px-4">Register</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage