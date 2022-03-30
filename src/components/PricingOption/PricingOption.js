import React from 'react';
import PriceBenefits from '../PriceBenefits/PriceBenefits';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'


const PricingOption = (props) => {
    const { name, price, benefits } = props.option
    return (
        <div className=' bg-white p-4  rounded-lg'>
            <h2 className=' bg-indigo-300 py-2 rounded text-2xl font-bold text-white' >{name}</h2>
            <p>
                <span className=' text-5xl font-bold  '>{price}</span>
                <span className=' text-xl font-bold text-gray-500  '>/mo</span>

            </p>
            <div className=' text-xl text-left '>
                <h3>Benefits:</h3>
               <div>
                   {benefits.map(benefit => <PriceBenefits
                   
                   benefit ={benefit}
                   
                   ></PriceBenefits> )}
               </div>

            </div>
            <button className=' bg-green-500 flex justify-center items-center w-full rounded py-2 text-white hover:text-orange-700 font- '>
               <ChevronDoubleRightIcon className='w-4 h-4'></ChevronDoubleRightIcon> Buy Now
            </button>
        </div>
    );
};

export default PricingOption;