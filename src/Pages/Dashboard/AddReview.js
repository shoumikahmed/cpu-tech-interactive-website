import React from 'react';

const AddReview = () => {
    return (
        <div className='flex justify-center items-center mt-32'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add Review</h2>

                    <form>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input
                                type="text"
                                placeholder="City/District"
                                className="input input-bordered w-full max-w-xs"
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <textarea class="textarea textarea-bordered" placeholder="Review"></textarea>

                        </div>
                        <input className='btn w-full max-w-xs mt-5' type="submit" value="Add Review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;