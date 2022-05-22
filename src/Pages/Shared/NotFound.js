import React from 'react';
import notFound from '../../assets/images/404.jpg'

const NotFound = () => {
    return (
        <div className='my-10'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;