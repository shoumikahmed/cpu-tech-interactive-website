import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    const [user] = useAuthState(auth)
    const addReview = e => {
        e.preventDefault()
        const review = {
            email: user?.email,
            image: user?.photoURL,
            name: e.target.name.value,
            city: e.target.city.value,
            ratings: e.target.ratings.value,
            review: e.target.review.value,
        }

        const url = `http://localhost:5000/review`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Review added Successfully')
                e.target.reset()
            })
    }



    return (
        <div className='flex justify-center items-center mt-4'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add Review</h2>

                    <form onSubmit={addReview}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input
                                disabled
                                value={user?.displayName || ''}
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input
                                disabled
                                value={user?.email || ''}
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input
                                name="city"
                                id="city"
                                type="text"
                                placeholder="City/District"
                                className="input input-bordered w-full max-w-xs"
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                disabled
                                value={user?.photoURL || ''}
                                name="image"
                                id="image"
                                type="text"
                                placeholder="Image"
                                className="input input-bordered w-full max-w-xs"
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input
                                name="ratings"
                                id="ratings"
                                type="text"
                                placeholder="Ratings"
                                className="input input-bordered w-full max-w-xs"
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <textarea

                                name="review"
                                id="review"
                                class="textarea textarea-bordered"
                                placeholder="Review"
                            ></textarea>

                        </div>
                        <input className='btn w-full max-w-xs mt-5' type="submit" value="Add Review" />
                    </form>
                </div>

                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default AddReview;