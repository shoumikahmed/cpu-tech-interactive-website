import React from 'react';
import banner from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen w-full">
            <div class="hero-content flex-col lg:flex-row-reverse ">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl object-cover" />
                <div>
                    <h1 class="text-5xl font-bold">CPU Manufacturing Company</h1>
                    <p class="py-6">We Manufacture CPU Accessories.We provide best goods.We manufacture RAM, SSD, HDD, CPU Casing, Power Supply, RGB Cooler.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;