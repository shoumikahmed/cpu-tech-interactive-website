import React from 'react';


const Carousel = () => {
    return (
        <section>
            <h1 className='text-purple-500 text-center mt-20 mb-10 text-3xl'>Our products for sell</h1>
            <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box mx-auto mb-20">
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2" class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB" class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6" class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=225E6693" class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=9D9539E7" class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=BDC01094" class="rounded-box" />
                </div>
                <div class="carousel-item">
                    <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=7F5AE56A" class="rounded-box" />
                </div>
            </div>
        </section>
    );
};

export default Carousel;