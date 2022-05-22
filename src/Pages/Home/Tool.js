import React from 'react';

const Tool = ({ tool }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-20 hover:shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={tool?.img} alt="" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{tool?.name}</h2>
                <p>{tool?.description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Place Order</button>
                </div>
            </div>
        </div>

    );
};

export default Tool;