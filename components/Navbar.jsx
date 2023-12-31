'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../public/assets/logo.png';
import menu from '../public/menu-icon.png';
import menuclose from '../public/menu-close.png';
import { headerlinks } from '@/components/dependency';

const Navbar = () => {
    const [Toggle, SetToggle] = useState(true);

    const onToggle = () => {
        SetToggle(!Toggle);
    };

    return (
        <nav className='bg-gradient-to-r from-[#8e7dee] to-[#8674f0]'>
            <div className=" fixed top-0 left-0 right-0 mx-auto flex p-5 flex-wrap flex-row justify-between items-center bg-gradient-to-r from-[#97e5ec] to-[#3a757c] mt-2vh mb-2vh drop-shadow-2xl z-[5]">
                <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                    <Image src={logo} width={50} height={20} alt="logo" className='hover:w-[55px] transition-all ease-in 2s hover:h-[50px]'/>
                    <span className="ml-3 text-xl">LegalX</span>
                </a>
                <nav className={`md:ml-auto md:mr-auto flex-row items-center text-base justify-center md:block hidden`}>
                    {headerlinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.name}`}
                            className="mr-5 hover:font-bold cursor-pointer text-black-500 md:ml-[2vw] hover:text-white hover:text-bold w-[300px]"
                        >
                            {link.name.toUpperCase()}
                        </a>
                    ))}
                </nav>
                
                <button className="inline-flex items-center bg-white-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 md:hidden" onClick={onToggle}>
                    {Toggle ? (
                        <Image src={menu} width={45} height={30} alt="menu" className='rounded-[20px] hover:drop-shadow-xl ml-[20vh]' />
                    ) : (
                        <Image src={menuclose} width={30} height={20} alt="cross" />
                    )}
                </button>
                </div>
                <div className='flex justify-start items-center'>
                    <nav className={`md:ml-auto md:mr-auto flex flex-col  items-start text-base justify-center md:hidden fixed mt-[403px] ml-[2vw] ${Toggle ? 'hidden' : 'z-[50]'} mt-[30vh] bg-gradient-to-b from-[#97e5ec] to-[#3a757c] rounded-[10px]`}>
                        {headerlinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.name}`}
                                className="mr-5 ml-[1vw] cursor-pointer hover:text-white hover:text-bold text-black-500 py-[2px]"
                            >
                                {link.name.toUpperCase()}
                            </a>
                        ))}
                    </nav>
                </div>
                
            
        </nav>
    );
};

export default Navbar;
