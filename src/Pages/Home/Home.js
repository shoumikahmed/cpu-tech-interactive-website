import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import Rating from './Rating';
import Tools from './Tools';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Tools></Tools>
            <Carousel></Carousel>
            <Rating></Rating>
        </section>
    );
};

export default Home;