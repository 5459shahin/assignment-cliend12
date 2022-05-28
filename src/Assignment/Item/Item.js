import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Item = ({ service }) => {
    const navigate = useNavigate();
    const { name, price, img, quantity, description, _id } = service;

    // const navigateToPurchase = id => {
    //     navigate(`/purchase/${id}`);

    // }
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <p> name: {name}</p>
                    <p> price: {price}</p>
                    <p> Available quantity: {quantity}</p>
                    
                    <p>{description}</p>


                    <div className="card-footer bg-transparent border-0">
                        <Link to={`purchase/${service._id}`} className="btn btn-dark w-100">
                            Buy Now
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Item;