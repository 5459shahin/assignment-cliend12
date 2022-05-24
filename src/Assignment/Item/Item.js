import React from 'react';

const Item = ({ service }) => {
    console.log(service)
    const { price, img, quantity, description } = service;
    return (
        <div>
            
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <p> price: {price}</p>
                    <p>quantity: {quantity}</p>
                    <p>{description}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Item;