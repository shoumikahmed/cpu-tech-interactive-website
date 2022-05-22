import React from 'react';
import country from '../../assets/icons/country.png'
import happyClients from '../../assets/icons/clients.png'
import feedback from '../../assets/icons/feedback3.png'

const BusinessSummery = () => {
    return (
        <section>
            <h1 className='text-purple-500 text-center text-3xl font-bold mb-10'>Million of People Trust's us</h1>
            <div class="stats shadow w-full flex justify-center items-center">

                <div class="stat flex justify-center items-center">
                    <div class="stat-figure text-secondary">
                        <img className='w-32' src={country} alt="" />
                    </div>
                    <div>
                        <div class="stat-value">70+</div>
                        <div class=" font-bold text-2xl">Countries</div>
                    </div>
                </div>

                <div class="stat flex justify-center items-center">
                    <div class="stat-figure text-secondary">
                        <img className='w-32' src={happyClients} alt="" />
                    </div>
                    <div>
                        <div class="stat-value">2.8M</div>
                        <div class="font-bold text-2xl">Happy Clients</div>
                    </div>
                </div>

                <div class="stat flex justify-center items-center">
                    <div class="stat-figure text-secondary">
                        <img className='w-32' src={feedback} alt="" />
                    </div>
                    <div>
                        <div class="stat-value">5800+</div>
                        <div class="font-bold text-2xl">Feedbacks</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BusinessSummery;