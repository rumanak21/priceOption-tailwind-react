import React from 'react';
import { CheckCircleIcon, CheckIcon } from '@heroicons/react/solid'


const PriceBenefits = (props) => {
    return (
        <div>
             <p className=' flex items-center ' >
                    <CheckCircleIcon className=' h-4 w-4 text-green-500 mr-2 ' ></CheckCircleIcon>
                    {props.benefit}
                </p>
        </div>
    );
};

export default PriceBenefits;