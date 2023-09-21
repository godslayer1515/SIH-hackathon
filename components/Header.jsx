'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import menu from '../public/menu-icon.png'
import menuclose from '../public/menu-close.png'
import { useState } from 'react'

const Header = ( {links} ) => {
const [Toggle,SetToggle] = useState(true)
const onToggle =() => {
    SetToggle(!Toggle)
}
return (
    <>
    <header className="text-gray-600 body-font border-[2px] border-red-500 wu= h-full md:min-h-[400px]">
        <div className="container mx-auto flex p-5 flex-row justify-between items-center mt-[2vh] mb-[2vh]">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Image src={logo} width={50} height={20} alt="logo"/>
                <span className="ml-3 text-xl">sitename</span>
            </a>
            <nav className={`md:ml-auto md:mr-auto flex flex-wrap flex-col md:flex-row items-center text-base justify-center ${Toggle ? 'hidden':''}`}>
                {/* {
                    links.map((link)=>{
                        console.log(link.name);
                        <a key={link.id} className="mr-5 hover:text-gray-900 cursor-pointer text-black">{link.name}</a>
                    })
                } */}
                <a className="mr-5 hover:text-gray-900 cursor-pointer">First Link</a>
                <a className="mr-5 hover:text-gray-900 cursor-pointer">Second Link</a>
                <a className="mr-5 hover:text-gray-900 cursor-pointer">Third Link</a>
                <a className="mr-5 hover:text-gray-900 cursor-pointer">Fourth Link</a>
                <a className="mr-5 hover:text-gray-900 cursor-pointer">fifth Link</a>
                <a className="mr-5 hover:text-gray-900 cursor-pointer">sixth Link</a>
                <a className="mr-5 hover:text-gray-900 cursor-pointer">seventh Link</a>
            </nav>
            <button className="inline-flex items-center bg-white-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 md:hidden">
                {
                    Toggle ?  <Image src={menu} width={45}
                    height={30} onClick={onToggle} alt="menu"/> :<Image src={menuclose} width={30}
                    height={20} onClick={onToggle} alt="cross"/> 
                }
            </button>
        </div>
        <div className='flex flex-col justify-center items-center w-full border-[2px] border-blue-500 md:min-h-[500px] h-full'>
            <div className='w-[50vw] py-[2vh]'>
                <h1 className='text-2xl flex justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
            <div className='w-[40vw] py-[2vh]'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem velit quas voluptatem eius harum assumenda minus ut quibusdam debitis possimus, labore saepe officiis?</p>
            </div>
            <div className='py-[2vh]'>
                logo
            </div>
      
    </div>
    </header>
    </>
)
}

export default Header
