import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/products`;
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
        <div>
            <h2>Update items</h2>
            <div className='mx-auto w-50'>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="name" class="input input-bordered input-primary w-full max-w-xs" {...register("name")}/>
  
                    <input type="number" placeholder="price"  class="input input-bordered input-secondary w-full max-w-xs" {...register("price")} /> <br />

                    <input type="number" placeholder="quantity" class="input input-bordered input-primary w-full max-w-xs" {...register("quantity")} />

                    <input type="number" placeholder="maximumOrder" class="input input-bordered input-primary w-full max-w-xs" {...register("maximumOrder")} /> <br />

                    <input type="text" placeholder="supplier" class="input input-bordered input-primary w-full max-w-xs" {...register("supplier")} /> <br />

                    <textarea className='mb-2 p-2' type="text" placeholder="description" {...register("description")} />
                    <input className='mb-2 p-2' type="text" placeholder=" image url" {...register("img")} /> <br />


                    <input type="submit" value="Add New Product" />
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;