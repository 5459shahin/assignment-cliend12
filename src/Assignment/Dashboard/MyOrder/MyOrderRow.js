import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const myOrderRow = ({ index, order, setOrderCancel }) => {

    // const navigate = useNavigate();

    // const handlePayment = (id) => {
    //     navigate(`/dashboard/checkout/${id}`);
    // }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.productName}</td>
            <td>{order.userEmail}</td>
            <td>{order.orderQuantity}</td>
            <td>{order.price}</td>
            <td><button className='btn btn-xs btn-success'>Pay</button></td>
            <td>
                {order.transactionId ? "N/A" : <label htmlFor="OrderCancelModal" onClick={() => { setOrderCancel(order) }} className="btn btn-xs btn-warning">Cancel</label>}
            </td>
        </tr>
    );
};

export default myOrderRow;