import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const Purchase = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const [product, setProduct] = useState({})

    const [inputValue, setInputValue] = useState(product?.minimumquantity);

    console.log(product)



    // const { name, _id, img, price, minimumquantity,
    //     availablequantity, description } = product

    useEffect(() => {
        const url = `http://localhost:5000/tool/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    const handleOrder = event => {
        event.preventDefault()

        const order = {
            name: event.target.name.value,
            country: event.target.country.value,
            email: event.target.email.value,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast('Order hase been placed')
                }
                else {
                    toast.error('You have already placed the order')
                }
            })

    }

    const handleChange = event => {
        setInputValue(event.target.quantity.value);
      };

    const handleQuantity = e => {
        const quantity = e.target.quantity.value;
        if (quantity > quantity.availablequantity) {
            toast(`We have only ${quantity?.availablequantity}`)
        }
    }


    return (
        <section>
            <div className="card w-96 lg:max-w-lg bg-base-100 shadow-xl mt-20 hover:shadow-2xl mx-auto my-20">
                <figure className='px-10 pt-10'>
                    <img src={product?.img} alt="" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{product?.name}</h2>
                    <p>Min quantity: {product?.minimumquantity}</p>
                    <p>Available quantity: {product?.availablequantity}</p>
                    <p>Price: {product?.price}</p>
                    <p>{product?.description}</p>
                    <input

                        value={product?.minimumquantity}
                        name="quantity"
                        type="number"
                        placeholder="Quantity"
                        className="input input-bordered w-full max-w-xs"
                    />

                    <button onClick={handleQuantity} className='btn btn-primary'>Purchase</button>
                </div>
            </div>


            <div className='flex justify-center items-center mt-4 my-16'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Order Now</h2>

                        <form onSubmit={handleOrder}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input
                                    disabled
                                    value={product?.name || ''}
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
                                    name="country"
                                    id="country"
                                    type="text"
                                    placeholder="Country"
                                    className="input input-bordered w-full max-w-xs"
                                />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input
                                    name="address"
                                    id="address"
                                    type="text"
                                    placeholder="Address"
                                    className="input input-bordered w-full max-w-xs"
                                />

                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input
                                    name="phone"
                                    id="phone"
                                    type="number"
                                    placeholder="Phone Number"
                                    className="input input-bordered w-full max-w-xs"
                                />

                            </div>

                            <input className='btn btn-primary w-full max-w-xs mt-5' type="submit" value="Order Now" />
                        </form>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Purchase;