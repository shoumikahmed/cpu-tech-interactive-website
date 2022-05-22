import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {

    const navigate = useNavigate()
    const navigateToPurchase = _id => {
        navigate(`/purchase/${_id}`)
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-20 hover:shadow-2xl">
            <figure>
                <img src={tool?.img} alt="" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{tool?.name}</h2>
                <p>{tool?.description}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigateToPurchase(tool?._id)} class="btn btn-primary">Place Order</button>
                </div>
            </div>
        </div>

    );
};

export default Tool;