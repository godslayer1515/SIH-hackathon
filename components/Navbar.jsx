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
        <nav className='bg-white'>
            <div className=" fixed top-0 left-0 right-0 mx-auto flex p-5 flex-wrap flex-row justify-between items-center bg-white mt-2vh mb-2vh drop-shadow-xl z-[5]">
                <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                    <Image src={logo} width={50} height={20} alt="logo" className='hover:w-[55px] transition-all ease-in 2s hover:h-[50px]'/>
                    <span className="ml-3 text-xl">LegalX</span>
                </a>
                <nav className={`md:ml-auto md:mr-auto flex-row items-center text-base justify-center md:block hidden`}>
                    {headerlinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.name}`}
                            className="mr-5 hover:font-bold cursor-pointer text-black-500 md:ml-[2rem] hover:text-[#8674f0] hover:text-bold w-[300px]"
                        >
                            {link.name.toUpperCase()}
                        </a>
                    ))}
                </nav>
                <nav className={`md:ml-auto md:mr-auto flex flex-col md:flex-row items-center text-base justify-center md:hidden ${Toggle ? 'hidden' : ''}`}>
                    {headerlinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.name}`}
                            className="mr-5 cursor-pointer hover:text-[#8674f0] hover:text-bold text-black py-[2px]"
                        >
                            {link.name.toUpperCase()}
                        </a>
                    ))}
                </nav>
                <button className="inline-flex items-center bg-white-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 md:hidden" onClick={onToggle}>
                    {Toggle ? (
                        <Image src={menu} width={45} height={30} alt="menu" />
                    ) : (
                        <Image src={menuclose} width={30} height={20} alt="cross" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
