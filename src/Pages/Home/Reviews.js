import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16'>
                {
                    reviews?.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;