import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://radiant-everglades-78330.herokuapp.com/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })


        console.log(data);

    }
    return (
        <div className='bg-slate-800 p-5'>
            <h2>Update items</h2>
            <div className='card bg-slate-800 shadow-xl w-96 mx-auto'>
                <form className=' d-flex flex-column bg-slate-600 ' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="name" class="m-5 input input-bordered input-primary w-full max-w-xs" {...register("name")} /><br />

                    <input type="number" placeholder=" price" class="input input-bordered input-secondary w-full max-w-xs" {...register("price")} /> <br />

                    <input type="number" placeholder="quantity" class="m-5 input input-bordered input-primary w-full max-w-xs" {...register("quantity")} /><br />

                    <input type="number" placeholder="maximumOrder" class="input input-bordered input-primary w-full max-w-xs" {...register("maximumOrder")} /> <br />

                    <input type="text" placeholder="supplier" class="m-5 input input-bordered input-primary w-full max-w-xs" {...register("supplier")} /> <br />

                    <input className='mb-2 input input-bordered input-primary w-full max-w-xs' type="text" placeholder=" image url" {...register("img")} /> <br /><br />

                    <textarea class="textarea textarea-primary input input-bordered input-primary w-full max-w-xs" placeholder="description" {...register("description")} ></textarea> <br />
                    <button class="btn btn-outline btn-primary m-8"><input type="submit" value="Add New Product" /></button>

                </form>
            </div>
        </div>
    );
};

export default UpdateItem;