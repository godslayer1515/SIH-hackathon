import React from 'react'

const Getstarted = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-full border-[2px] border-red-500 h-full py-[40px]'>
      <h1 className='md:file:text-2xl text-xl my-[30px]'>Lorem ipsum dolor sit amet consectetur aefwfawef aeadsf</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className='flex flex-col md:flex-row md:justify-between justify-center items-center border-[2px] border-orange-500 bg-[#2a323f]'>
        <p className='text-white font-bold w-[300px] my-[10px] md:ml-[500px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptatibus quas esse, quis vero accusantium laborum nulla facere voluptates</p>
        <button className='w-[120px] h-[50px] bg-green-600 rounded-[20px] my-[20px] text-white md:mr-[500px]'>
            get started now
        </button>
    </div>
    </>
  )
}

export default Getstarted
