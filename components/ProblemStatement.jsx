import React from 'react';

const ProblemStatement = () => {
    return (
        <div id='ps' className='bg-[#f5f5f5] w-full'>
            <div className='container mx-auto py-8 px-4 sm:px-6 lg:px-8'>
                <h1 className='text-2xl sm:text-3xl text-center font-bold my-4'>Problem Statement Details</h1>
                <div className='space-y-4'>
                    <div className='bg-white shadow-md p-4 rounded-lg'>
                        <h2 className='text-lg sm:text-xl font-semibold'>Title:</h2>
                        <p className='text-gray-700'>Addressing India{'\''}s Legal Services Accessibility Challenge</p>
                    </div>
                    <div className='bg-white shadow-md p-4 rounded-lg'>
                        <h2 className='text-lg sm:text-xl font-semibold'>Problem Description:</h2>
                        <p className='text-gray-700'>
                            India{'\''}s legal services sector faces significant challenges, making it difficult for people to access the legal support they need. Many legal service providers, including advocates, arbitrators, and notaries, operate independently, resulting in a fragmented and unorganized landscape. This lack of structure leads to several issues:
                        </p>
                        <ul className='list-disc pl-4 text-gray-700'>
                            <li>Lack of Transparency: Clients struggle to find the right legal service provider for their needs due to lack of centralized information and reviews.</li>
                            <li>Difficulty in Quality Assurance: Ensuring the quality and reliability of legal services is a challenge, since there is no standardized system for evaluating providers.</li>
                            <li>Limited Accessibility: Citizens from diverse socio-economic backgrounds often find it challenging to access legal expertise and representation, exacerbating the justice gap.</li>
                        </ul>
                    </div>
                    <div className='bg-white shadow-md p-4 rounded-lg'>
                        <h2 className='text-lg sm:text-xl font-semibold'>Objective:</h2>
                        <p className='text-gray-700'>
                            Our objective is to revolutionize the legal services landscape in India by developing an innovative eMarketplace platform. This platform will connect legal service providers with clients, addressing the challenges mentioned above while promoting transparency, efficiency, and affordability.
                        </p>
                    </div>
                    <div className='bg-white shadow-md p-4 rounded-lg'>
                        <h2 className='text-lg sm:text-xl font-semibold'>Solution Overview:</h2>
                        <p className='text-gray-700'>
                            Our platform will serve as a one-stop destination for legal services, offering clients a user-friendly, secure, and transparent experience. Legal service providers will have a dedicated space to showcase their expertise, allowing clients to make informed decisions. Through this platform, we aim to:
                        </p>
                        <ul className='list-disc pl-4 text-gray-700'>
                            <li>Incentivize legal service providers to offer their expertise and services.</li>
                            <li>Ensure transparency and accountability in service delivery.</li>
                            <li>Maintain high standards of service quality.</li>
                            <li>Facilitate easy and efficient client-provider matching.</li>
                            <li>Bridge the accessibility gap by serving citizens from all backgrounds.</li>
                        </ul>
                    </div>
                    <div className='bg-white shadow-md p-4 rounded-lg'>
                        <h2 className='text-lg sm:text-xl font-semibold'>Expected Impact:</h2>
                        <p className='text-gray-700'>
                            We anticipate that our platform will significantly enhance access to legal services, making them more accessible, affordable, and reliable. It will empower both legal service providers and clients, fostering a transparent and efficient legal ecosystem.
                        </p>
                    </div>
                    <div className='bg-white shadow-md p-4 rounded-lg'>
                        <h2 className='text-lg sm:text-xl font-semibold'>Collaboration with Ministry:</h2>
                        <p className='text-gray-700'>
                            Our project is in collaboration with the Ministry of Law and Justice, aligning with their vision to improve legal services accessibility in India.
                        </p>
                    </div>
                    <div className='bg-white shadow-md p-4 rounded-lg'>
                        <h2 className='text-lg sm:text-xl font-semibold'>Deliverables for SIH 2023:</h2>
                        <p className='text-gray-700'>
                            As part of the Smart India Hackathon 2023, we are presenting a functional prototype of our eMarketplace platform, including wireframes, user stories, and a video demonstration showcasing the platform{'\''}s key features.
                        </p>
                    </div>
                    <div className='bg-white shadow-md p-4 rounded-lg'>
                        <h2 className='text-lg sm:text-xl font-semibold'>Future Plans:</h2>
                        <p className='text-gray-700'>
                            Beyond the hackathon, we are committed to refining and expanding our platform, aiming to make a lasting impact on the legal services sector in India.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProblemStatement;
