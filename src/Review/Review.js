import React from 'react';

const Review = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="avatar place-content-center">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
                    </div>
                </div>
                <div class="card-body items-center text-center">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>

                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="avatar place-content-center">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
                    </div>
                </div>
                <div class="card-body items-center text-center">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>

                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="avatar place-content-center">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
                    </div>
                </div>
                <div class="card-body items-center text-center">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;