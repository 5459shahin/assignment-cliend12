import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const url = `https://radiant-everglades-78330.herokuapp.com/reviews`;
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
        console.log(data)
    };

    return (
        <div className='flex  my-16 justify-center items-center'>

            <div className='card w-96 bg-base-100 shadow-xl'>
                <h1 className=' text-secondary text-center text-2xl'>Please Add Review</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-control w-full p-10'>

                        <input className=' mb-2 p-2 border-2 rounded-3 ' type="number" {...register("ratting", { min: 1, max: 5 })} />
                        <textarea placeholder='description' className=' mb-2 p-2 border-2 rounded-3 ' type='text' {...register("description")} />

                        <input className=' bg-secondary p-2 rounded-3xl mt-4 text-white' type="submit" value='ADD TO ORDER' />
                    </div>
                </form>
            </div >

        </div >
    );
};

export default Review;