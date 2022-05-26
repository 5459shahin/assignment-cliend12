import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import product from '../../img/Ronix-tools-cover1.jpg';

const Purchase = () => {
    const { id } = useParams();
    // console.log(id);

    // const [services, setServices] = useState({});


    // useEffect(() => {
    //     fetch(`http://localhost:5000/purchase/${id}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    //         // console.log(setServices));

    // }, [id])

    const [products, setProducts] = useState({});
    useEffect(() => {
        const product = async () => {
            const { data } = await axios.get(`http://localhost:5000/purchase/${id}`);
            setProducts(data);
        };
        product();
    }, [id]);

    console.log(products);


    return (
        <div className='bg-base-200'>
            <h2 className='text-5xl font bold pt-5'>place order now</h2>
            <div class="hero p-5 bg-base-200 ">

                <div class="hero-content flex-col lg:flex-row">
                    <img src={products.img} class="max-w-sm rounded-lg shadow-2xl" alt="" />
                    <div className='w-300 h-300 '>                       
                            <p class=" font-bold"> price: ${products.price}</p>
                            <p class=" font-bold">maximum order: {products.maximumOrder}</p>
                            <p class="font-bold"> quantity: {products.quantity}</p>
                            <p class="w-80">{products.description}</p>
                    </div>
                </div>
            </div>
            <div className='bg-base-200'>
                <div className='m-3'>
                    <input type="text" placeholder="maximum order 12 pice" class=" m-3 input input-bordered input-primary w-full max-w-xs" />

                    <input type="email" placeholder="email" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className='m-3'>
                    <input type="number" placeholder="Your phone number" class="m-3 input input-bordered input-primary w-full max-w-xs" />

                    <input type="address" placeholder="Your address" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <button class="btn btn-primary">Confirm Order</button>
            </div>



        </div>
    );
};

export default Purchase; 