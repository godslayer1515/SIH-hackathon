import React from 'react'
import Image from 'next/image'
import footerlogo from '../public/assets/footerlogo.png'


const Footer = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center w-full bg-[#8674f0] h-full rounded-[23px] drop-shadow-lg'>
      <div className='flex flex-col justify-center md:items-start md:ml-[90px] drop-shadow-xl md:px-[5vw] md:py-[4vh] px-[5vw] my-3'>
        <h1 className='text-2xl'>Professor Guide:-</h1>
        <p className='hover:text-lg cursor-pointer'>Prof - Vijayan balaji</p>
        <p className='hover:text-lg cursor-pointer'>Prof - shravana kayapanni</p>
      </div>
      <div className='flex flex-col justify-center items-center ml-[90px]drop-shadow-xl  md:px-[5vw] md:py-[4vh] px-[5vw] my-3'>
        <p className='text-bold pb-[10px] pt-[10px]'>This project was made for the SIH hackathon</p>
        <Image src={footerlogo} objectFit="cover" layout="responsive" className='shadow-lg rounded-[5px] hover:shadow-2xl'></Image>
      </div>
      <div className='flex flex-col md:px-[5vw] md:py-[4vh] px-[5vw] my-3'>
        <h3 className='text-2xl text-bold'>Note:</h3>
        <p className='w-[400px] mt-[5px]'>Law and justice are the twin pillars upon which civilized societies stand, ensuring that fairness prevails over chaos and that the rights of all are protected.</p>
      </div>
    </div>
  )
}

export default Footer
