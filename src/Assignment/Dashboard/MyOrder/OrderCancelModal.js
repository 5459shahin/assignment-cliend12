import React from 'react';
import { toast } from 'react-toastify';

const OrderCancelModal = ({ orderCancel, setOrderCancel }) => {
    const handleCancel = id => {
        fetch(`https://radiant-everglades-78330.herokuapp.com/order/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Cancelled Successfully", { id: "orderCancel" });
                    window.location.reload();
                    setOrderCancel(null);
                }
            });
    }
    return (
        <div>
            <input type="checkbox" id="OrderCancelModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure to cancel {orderCancel.name}?</h3>
                    <div className="modal-action">
                        <button onClick={() => { handleCancel(orderCancel._id) }} className='btn btn-xs btn-warning'>Yes</button>
                        <label htmlFor="OrderCancelModal" className="btn btn-xs btn-neutral">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCancelModal;