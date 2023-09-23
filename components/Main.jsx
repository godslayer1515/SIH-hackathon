import React from 'react'
import Image from 'next/image'
import ministry from '@/public/assets/Ministry-of-Law-Justice.jpg'
const Main = () => {
    return (
        <div className=" flex justify-center">
            <Image src={ministry} width={1280} height={1280} alt="logo" className='w-[50%] h-[80%]' />
        </div>
    )
}

export default Main