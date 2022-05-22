import React from 'react';
import { Link } from 'react-router-dom';
import myPicture from '../../assets/images/shoumik.jpg'

const MyPortfolio = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl my-20">
            <figure>
                <img className='w-96' src={myPicture} alt="Album" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Shoumik Ahmed</h2>
                <p>
                    <strong className='text-purple-500'>Email: shoumikahmed103@gmail.com.</strong>
                    <br />
                    <strong className='text-purple-500'>Educational Background: B.A hons 2nd year.</strong>
                    <br />
                    <strong className='text-purple-500'>Technology Skills: Web Developer.</strong>
                </p>
                <div className='text-center mb-10 font-bold text-2xl'>
                    <marquee><h1 className='text-purple-500'>Here is my 3 best website by coding which are in these buttons!!!</h1></marquee>
                </div>
                <div class="card-actions justify-center">
                    <a href="https://sa-photography-assignment10.web.app/"><button class="btn btn-primary">SA Photography</button></a>
                    <a href="https://bike-stock-assignment11.web.app/"><button class="btn btn-primary">Bike Stocker</button></a>
                    <a href="https://sa-photography-assignment10.web.app/"><button class="btn btn-primary">SA Photography</button></a>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;