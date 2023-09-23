import React from 'react';
import flowchart from '@/public/assets/sih-flowchart.svg'
import Image from 'next/image';
const Flowchart = () => {
    return (
        <>
            <h1 className='text-center'>Flowchart</h1>
            <div className='flex justify-center'>
                <a
                    href='/assets/sih-flowchart.svg' // Replace with the actual path to your image
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Image
                        src={flowchart} // Replace with the actual path to your image
                        alt='Flowchart'
                        width={300} // Adjust the width as needed
                        height={300} // Adjust the height as needed
                    />
                </a>
            </div>
        </>
    );
};

export default Flowchart;
