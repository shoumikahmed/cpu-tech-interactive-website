import React from 'react';

const Review = ({ review }) => {

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-20 hover:shadow-lg">
            <div className="card-body">
                <p>Review: {review?.review}</p>
                <div className=" flex items-center">
                    <div className="avatar">
                        <div className="w-16 mt-8 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review?.image} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <h4 className='text-xl'>{review?.name}</h4>
                        <p>Ratings: {review?.ratings}</p>
                        <p>City: {review?.city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;