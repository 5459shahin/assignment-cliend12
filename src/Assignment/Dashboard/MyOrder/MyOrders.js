import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import MyOrderRow from './MyOrderRow';
import OrderCancelModal from './OrderCancelModal';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [orderCancel, setOrderCancel] = useState(null);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://radiant-everglades-78330.herokuapp.com/myorder/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            });
    }, [])

    return (
        <div className='overflow-x-auto'>
            <table className='table w-full'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Email</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Cancelation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <MyOrderRow key={order._id}
                            index={index}
                            order={order}
                            setOrderCancel={setOrderCancel}></MyOrderRow>)
                    }
                </tbody>
            </table>
            {orderCancel && <OrderCancelModal setOrderCancel={setOrderCancel}
                orderCancel={orderCancel}
            ></OrderCancelModal>}
        </div>
    );
};

export default MyOrders;