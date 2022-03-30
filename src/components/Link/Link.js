import React from 'react';

const Link = (props) => {
    const {name, link} = props.route
    
    return (
        <div className=' mr-6'>
            <ul>
                <li >

                <a href={link}>{name}</a>
                
                </li>
            </ul>
        </div>
    );
};

export default Link;