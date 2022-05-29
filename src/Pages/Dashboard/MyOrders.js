import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()

                })
                .then(data => {
                    setOrders(data)

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
                            <th>Delete Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr
                                key={order?._id}
                            >
                                <th>{index + 1}</th>
                                <td>{order?.name}</td>
                                <td>{order?.email}</td>
                                <td>{order?.phone}</td>
                                <td><button className='btn btn-xs'>Delete</button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;