import React from 'react';

const ReviewDetails = ({review}) => {
    const { _id, ratting, description } = review;
    return (
        <div class="card text-center font-serif w-96 bg-base-100 shadow-xl gap-5 m-5  ">

            <div class="card-body ">
                <h2 class="card-title justify-center items-center"><span>{/* <FcRating></FcRating> */}</span>{ratting}</h2>


                <p className=' text-bold'>{description}</p>

            </div>
        </div>
    );
};

export default ReviewDetails;