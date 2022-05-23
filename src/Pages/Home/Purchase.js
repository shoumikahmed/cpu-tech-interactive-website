import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { _id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const url = `tools.json/purchase/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-20 hover:shadow-2xl mx-auto my-20">
            <figure className='px-10 pt-10'>
                <img src={product?.img} alt="" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{product?.name}</h2>
                <p>Min quantity: {product?.minimumquantity}</p>
                <p>Available quantity: {product?.availablequantity}</p>
                <p>Price: {product?.price}</p>
                <p>{product?.description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;