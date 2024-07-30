"use clients"
import Image from 'next/image';
import React from 'react';

interface LogoProps {
    // Add any props you need for your Logo component
}

const Logo: React.FC<LogoProps> = ({ /* Destructure props here */ }) => {
    return (
        <div className='rounded-full'>
            <Image src={'/icon.jpg'} alt={'icon'} width="50" height="75" className='rounded-full' />
        </div>
    );
};

export default Logo;