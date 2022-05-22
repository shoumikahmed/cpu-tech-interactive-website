import React from 'react';
import banner from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{
            background: `url(${banner})`
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold text-white">CPU Manufacturing Company</h1>
                    <p class="mb-5 text-white">We Manufacture CPU Accessories.We provide best goods.We manufacture RAM, SSD, HDD, CPU Casing, Power Supply, RGB Cooler.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;