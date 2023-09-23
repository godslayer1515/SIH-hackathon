import React from 'react';
import Image from 'next/image';
import ministry from '@/public/assets/Ministry-of-Law-Justice (1).jpg';

const Main = () => {
    return (
        <div id='home' className="flex justify-center items-center ">
            <div className="w-[50%] h-[50%] shadow-black">
                <Image
                    src={ministry}
                    alt="Ministry of Law and Justice"
                    layout="responsive"
                    width={1280}
                    height={1280}
                    objectFit="cover" // Maintain aspect ratio and cover the container
                />
            </div>
        </div>
    );
}

export default Main;
