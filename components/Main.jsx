import React from 'react';
import Image from 'next/image';
// import ministry from '@/public/assets/Ministry-of-Law-Justice (1).jpg';
import ministry from '@/public/assets/peakpx.png'

const Main = () => {
    return (
        <div id='home' className="flex justify-center items-center pt-[27vh]  pb-[10vh] md:pt-[11vh] md:pb-[2vh]">
            <div className="w-[50%] h-[50%] drop-shadow-xl hover:drop-shadow-2xl transition-all ease-in md:mt-[4vh]">
                <Image
                    src={ministry}s
                    alt="Ministry of Law and Justice"
                    layout="responsive"
                    width={1280}
                    height={500}
                    objectFit="cover" // Maintain aspect ratio and cover the container
                />
            </div>
        </div>
    );
}

export default Main;
