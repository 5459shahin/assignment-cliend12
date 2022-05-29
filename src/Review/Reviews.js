import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReviewDetails from './ReviewDetails';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    console.log(reviews)
    useEffect(() => {
        const url = `http://localhost:5000/reviews`;
        fetch(url, {
            method: 'GET'

        })
            .then(res => res.json())
            .then(data => setReviews(data))
        console.log(setReviews)

    }, [])

    return (
        <>
            <h1 className=' text-center text-3xl text-primary my-16 text-bold '>Our Reviews</h1>
            <div className='  mx-14 mx-auto'>

                <div className=' lg:mx-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-10 gap-15 my-4'>

                    {
                        reviews.map(review => <ReviewDetails
                            key={review._id}
                            review={review}
                        ></ReviewDetails>)
                    }
                </div>
            </div>
        </>
    );
};

export default Reviews;