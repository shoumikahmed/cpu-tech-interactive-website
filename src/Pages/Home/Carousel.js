import React from 'react';
import casing from '../../assets/images/casing.jpg'
import gpu from '../../assets/images/gpu.jpg'
import hdd from '../../assets/images/hdd.jpg'
import motherboard from '../../assets/images/motherboard.jpg'
import powersupply from '../../assets/images/powersupply.jpg'
import ram from '../../assets/images/ram.jpg'
import rgbcooler from '../../assets/images/rgbcooler.jpg'
import ssd from '../../assets/images/ssd.jpg'


const Carousel = () => {
    return (
        <section>
            <h1 className='text-purple-500 text-center mt-20 mb-10 text-3xl'>Our products for sell</h1>
            <div class="carousel carousel-center max-w p-4 space-x-4 bg-purple-200 rounded-box mx-auto mb-20 sm:p-5">
                <div class="carousel-item">
                    <img src={motherboard} class="rounded-box w-64 " alt='' />
                </div>
                <div class="carousel-item">
                    <img src={gpu} class="rounded-box w-64" alt='' />
                </div>
                <div class="carousel-item">
                    <img src={casing} class="rounded-box w-64 " alt='' />
                </div>
                <div class="carousel-item">
                    <img src={hdd} class="rounded-box w-64 " alt='' />
                </div>
                <div class="carousel-item">
                    <img src={rgbcooler} class="rounded-box w-64 " alt='' />
                </div>
                <div class="carousel-item">
                    <img src={ram} class="rounded-box w-64 " alt='' />
                </div>
                <div class="carousel-item">
                    <img src={ssd} class="rounded-box w-64" alt='' />
                </div>
                <div class="carousel-item">
                    <img src={powersupply} class="rounded-box w-64 " alt='' />
                </div>
            </div>
        </section>
    );
};

export default Carousel;