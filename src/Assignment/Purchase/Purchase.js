import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading'
import { useRef } from 'react';



const Purchase = () => {
  const quantityRef = useRef('');
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
  }, [])

  const handlePurchase = async (event) => {
    event.preventDefault();
    const orderPrice = parseFloat(products.quantity) * parseFloat(products.price_per_unit);
    console.log(orderPrice);
    const orderInfo = {
      price: products.price,
      userEmail: user.email,
      productName: products.name,
      orderQuantity: quantityRef.current.value,
      image: products.img,
    };
    console.log(orderInfo);

    fetch(`http://localhost:5000/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(orderInfo)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          console.log(data);
          toast.success('Order placed successfully!');
        }
      })
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={products?.img} alt="Album" />
      </figure>
      <div className="card-body">
        <form onSubmit={handlePurchase} className="flex flex-col px-10    ">
          <p className="text-4xl font-bold mt-2">{products?.name}</p>
          <p className="text-xl font-semibold py-2">
            price:{products?.price}
          </p>
          <p className="text-xl font-semibold py-2">
            Available:{products?.quantity}
          </p>
          <p className="text-xl font-semibold py-2">
            minimum order quantity:{products?.min_order_quantity}
          </p>
          <p className="text-justify font-semibold">{products?.description}</p>

          <input
            ref={quantityRef}
            type="number"
            className="input input-bordered w-full text-lg"
          />

          {quantity < products?.min_order_quantity ? (
            <small className="text-red-400 text-sm font-semibold">
              Quantity must be more than: {products?.min_order_quantity}
            </small>
          ) : (
            ""
          )}

          {quantity > products?.available_quantity ? (
            <small className="text-red-400 text-sm font-semibold">
              Order must be less than: {products?.available_quantity}
            </small>
          ) : (
            ""
          )}

          <input
            // disabled={
            //   quantity < products?.min_order_quantity ||
            //   quantity > products?.available_quantity
            // }
            className={
              quantity < products?.min_order_quantity ||
                quantity > products?.available_quantity
                ? "btn bg-gradient-to-r  from-sky-200 to-[#3a5353] mb-4 border-none text-white mt-8 "
                : "mt-8 btn bg-gradient-to-r  from-sky-500 to-[#2BAAA9] mb-4  border-none text-white "
            }
            type="submit"
            value="Confirm order"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;

