import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const ManageProduct = () => {

    const [deleteProduct, setDeleteProduct] = useState(null)

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://secret-atoll-95984.herokuapp.com/tool').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        fetch(`https://secret-atoll-95984.herokuapp.com/tool/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                // authorization: Bearer ${ localStorage.getItem('accessToken') }
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success('Product deleted successfully')
                    refetch()
                    setDeleteProduct()
                }
            })
    }

    return (
        <div>
            <h1 className='text-2xl text-center mt-4 mb-3'>Total Products : {products?.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product, index) => <tr key={product._id} product={product} index={index} refetch={refetch} >


                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-xl">
                                            <img src={product?.img} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product?.name}</td>
                                <label onClick={() => handleDelete(product._id)} for="my-modal-6" className="btn btn-sm btn-primary">Delete</label>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default ManageProduct;