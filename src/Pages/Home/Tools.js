import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    // const [tools, setTools] = useState([])

    const { data: tools, isLoading, refetch } = useQuery(['available',], () => fetch(`http://localhost:5000/tool`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/tool')
    //         .then(res => res.json())
    //         .then(data => setTools(data))
    // }, [])

    return (
        <div className='my-28'>
            <div className='text-center '>
                <h1 className='text-purple-500 text-3xl font-bold uppercase'>Our Products</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.slice(0, 6).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;