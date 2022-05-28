import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                    console.log(data)
                })
        }
    }, [user])

    return (
        <div>
            <h1>My Orders: {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Order Quantity</th>
                            <th>Payment</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr
                                key={order?._id}
                            >
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;