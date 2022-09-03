import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
// import { useParams } from 'react-router-dom';
/* import useTools from '../../hooks/useTools'; */
import auth from '../../../firebase.init.js'


const MyProfile = () => {
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user)
    }


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://radiant-everglades-78330.herokuapp.com/users`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    };

    return (
        <div className='bg-slate-800 p-5'>
            <div className='card bg-slate-600 shadow-xl w-96 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-control w-full p-10'>
                        <h1 className=' text-secondary text-2xl font-bold font-serif'><span className='text-primary'>Name :{user.displayName}</span> </h1>
                        <h1 className=' text-secondary my-2 text-xl font-bold font-serif'><span className='text-primary'>Email :{user.email}</span> </h1>
                        <h2 className=' text-primary  my-2 text-xl font-bold font-serif'> ADD MORE INFO </h2>
                        <input placeholder='Eduction' className='input my-3 input-bordered w-full max-w-xs' type='text' />
                        <input placeholder='Location' className='input input-bordered w-full max-w-xs' type='Location' {...register("Name", { required: true })} />
                        <input
                            type="number"
                            placeholder="Phone"
                            className="input input-bordered my-3 w-full max-w-xs"
                            {...register("Phone", {
                                required: true
                            })}
                        />
                        <input placeholder='linkIn-url' className='input input-bordered w-full max-w-xs' type='text' {...register("likedIn-url")} />

                        <input className='btn btn-outline btn-primary m-8 text-white' type="submit" value='ADD INFORMATION' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;