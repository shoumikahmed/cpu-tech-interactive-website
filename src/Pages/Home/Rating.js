import React from 'react';

const Rating = () => {
    return (
        <section className='text-center   pt-10 rounded shadow-lg hover:shadow-xl'>
            <h1 className='text-3xl mb-10 text-purple-500 uppercase font-extralight'>Please rate our company to go ahead.</h1>
            <div class="rating gap-1 mb-10">
                <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
                <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" defaultChecked />
                <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-600" />
                <input type="radio" name="rating-3" class="mask mask-heart bg-lime-600" />
                <input type="radio" name="rating-3" class="mask mask-heart bg-green-600" />
            </div>
        </section>
    );
};

export default Rating;