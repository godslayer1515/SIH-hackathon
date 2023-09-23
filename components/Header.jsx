'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import menu from '../public/menu-icon.png'
import menuclose from '../public/menu-close.png'
import ministry from '@/public/assets/Ministry-of-Law-Justice.jpg'
const Header = ({ links }) => {
    const [Toggle, SetToggle] = useState(true)
    const onToggle = () => {
        SetToggle(!Toggle)
    }
    return (
        <>
            <header>
                <div className="container mx-auto flex p-5 flex-row justify-between items-center mt-[2vh] mb-[2vh]">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={logo} width={50} height={20} alt="logo" />
                        <span className="ml-3 text-xl">sitename</span>
                    </a>
                    <nav className={`md:ml-auto md:mr-auto  flex-wrap flex-col md:flex-row items-center text-base justify-center hidden md:block`}>
                        {
                            links.map((link) => (
                                <a key={link.id} className="mr-5 hover:text-gray-900 cursor-pointer text-black">{link.name}</a>
                            ))
                        }
                    </nav>
                    <nav className={`md:ml-auto md:mr-auto flex flex-wrap flex-col md:flex-row items-center text-base justify-center ${Toggle ? 'hidden' : ''}`}>
                        {
                            links.map((link) => (
                                <a key={link.id} className="mr-5 hover:text-gray-900 cursor-pointer text-black">{link.name}</a>
                            ))
                        }
                    </nav>
                    <button className="inline-flex items-center bg-white-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 md:hidden" onClick={onToggle}>
                        {
                            Toggle ? <Image src={menu} width={45} height={30} alt="menu" /> : <Image src={menuclose} width={30} height={20} alt="cross" />
                        }
                    </button>
                </div>

            </header>
        </>
    )
}

export default Header