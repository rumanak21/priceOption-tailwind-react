import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {id: 1, name: 'Free', price:0},
        {id: 2, name: 'Regular', price:99.99},
        {id: 3, name: 'Premium', price:249.99},
       

    ]




    return (
        <div className=' bg-indigo-300  font-mono mt-8 p-8 '>
            <h1 className='text-2xl text-white'>Best Deals</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, placeat neque tenetur autem at repudiandae odio reprehenderit aliquam. Voluptates, officiis. </p>
            <div className=' grid md:grid-cols-3 gap-3 mt-8 '>
            {
                pricingOption.map(option => <PricingOption
                
                    key ={ option.id}
                    option ={option}
                
                ></PricingOption> )
            }

            </div>
        </div>
    );
};

export default Pricing;