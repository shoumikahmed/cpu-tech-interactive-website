import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageOrders = () => {

    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch('http://localhost:5000/orders').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>


            <div className="overflow-x-auto p-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Country</th>
                            {/* <th>Payment</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allOrders?.map((order, index) => <tr key={order._id} order={order} index={index}>

                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td>{order.country}</td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ManageOrders;