import React from 'react';
import flowchart from '@/public/assets/sih-flowchart.svg';
import Image from 'next/image';

const Flowchart = () => {
    return (
        <div id='flowchart' className='bg-[#f5f5f5] w-full py-8'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <h1 className='text-center text-2xl sm:text-3xl font-bold mb-4'>Flowchart</h1>
                <div className='flex justify-center'>
                    <a
                        href='/assets/sih-flowchart.svg' // Replace with the actual path to your image
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='w-full'>
                            <Image
                                src={flowchart} // Replace with the actual path to your image
                                alt='Flowchart'
                                width={1000} // Adjust the width as needed
                                height={300} // Adjust the height as needed
                                layout='responsive' // Ensure the image scales proportionally
                                className='rounded-[20px]'
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Flowchart;
