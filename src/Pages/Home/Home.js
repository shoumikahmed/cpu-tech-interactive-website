import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import Rating from './Rating';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Rating></Rating>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;