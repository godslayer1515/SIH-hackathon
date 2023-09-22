import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-[#f5f5f5] w-full '>
            <h1 className='text-xl my-[2vh]'>Problem Statement Details</h1>
            <h2>Title:</h2>
            <p>Addressing India{'\''}s Legal Services Accessibility Challenge</p>
            <h2>Problem Description:</h2>
            <p>India{'\''}s legal services sector faces significant challenges, making it difficult for people to access the legal support they need. Many legal service providers, including advocates, arbitrators, and notaries, operate independently, resulting in a fragmented and unorganized landscape. This lack of structure leads to several issues:</p>
            <ul className=' list-disc'>
                <li>Lack of Transparency: Clients struggle to find the right legal service provider for their needs due to a lack of centralized information and reviews.</li>
                <li>Difficulty in Quality Assurance: Ensuring the quality and reliability of legal services is a challenge, as there is no standardized system for evaluating providers.</li>
                <li>Limited Accessibility: Citizens from diverse socio-economic backgrounds often find it challenging to access legal expertise and representation, exacerbating the justice gap.</li>
            </ul>
            <h2>Objective:</h2>
            <p>Our objective is to revolutionize the legal services landscape in India by developing an innovative eMarketplace platform. This platform will connect legal service providers with clients, addressing the challenges mentioned above while promoting transparency, efficiency, and affordability.</p>
            <h2>Solution Overview:</h2>
            <p>Our platform will serve as a one-stop destination for legal services, offering clients a user-friendly, secure, and transparent experience. Legal service providers will have a dedicated space to showcase their expertise, allowing clients to make informed decisions. Through this platform, we aim to:
            </p>
            <ol className=' list-disc'>
                <li>Incentivize legal service providers to offer their expertise and services.</li>
                <li>Ensure transparency and accountability in service delivery.</li>
                <li>Maintain high standards of service quality.</li>
                <li>Facilitate easy and efficient client-provider matching.</li>
                <li>Bridge the accessibility gap by serving citizens from all backgrounds.</li>
            </ol>
            <h2>Expected Impact:</h2>
            <p>We anticipate that our platform will significantly enhance access to legal services, making them more accessible, affordable, and reliable. It will empower both legal service providers and clients, fostering a transparent and efficient legal ecosystem.</p>
            <h2>Collaboration with Ministry:</h2>
            <p>Our project is in collaboration with Minstry of Law and Justice, aligning with their vision to improve legal services accessibility in India.</p>
            <h2>Deliverables for SIH 2023:</h2>
            <p>As part of the Smart India Hackathon 2023, we are presenting a functional prototype of our eMarketplace platform, including wireframes, user stories, and a video demonstration showcasing the platform's key features.</p>
            <h2>Future Plans:</h2>
            <p>Beyond the hackathon, we are committed to refining and expanding our platform, aiming to make a lasting impact on the legal services sector in India.</p>
        </div>
    )
}

export default Hero
