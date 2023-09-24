'use client'
import React from 'react'
import Card from 'react-bootstrap/Card';
import Tahmeer from '../public/assets/tahmeer.png'
import frontend from '../public/assets/frontend.png'
import Image from 'next/image';
import Tarun from '../public/assets/tarun.png'
import Dikshita from '../public/assets/dikshita.jpeg'
import Siddharth from '../public/assets/sid1.jpg'

const Team = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-full bg-[#aaddca] rounded-[20px] md:pt-[100px] pt-[120px]' id='team'>
            <h1 className='text-2xl font-bold mt-2'>Our Team:-</h1>
            <div className='flex flex-row justify-center items-center flex-wrap mt-[2vh] bg-[]#8674f0'>
                <Card  className='drop-shadow-xl hover:drop-shadow-2xl w-[18rem] m-[15px] bg-white cursor-pointer rounded-[10px]'>
                    <Image src={Tahmeer} alt='frontend' layout="responsive" objectFit="cover" className='rounded-[10px]' />
                    <Card.Body>
                        <Card.Title className='text-xl font-bold mx-[15px]d py-[7px] ml-[5px]'>Tahmeer Pasha </Card.Title>
                        <Card.Text className='font-semibold ml-[5px]'>Team leader,Fullstack engineer</Card.Text>
                        <Card.Text className='font-sans py-[7px] ml-[5px]'>
                            <p >Github:-</p>
                            <a href="https://github.com/Tahmeerpasha" className='hover:text-blue-600'>
                            https://github.com/Tahmeerpasha
                            </a>
                            <p >Linked In:-</p>
                            <a href="https://www.linkedin.com/in/tahmeer-pasha" className='hover:text-blue-600'>
                            https://www.linkedin.com/in/tahmeer-pasha
                            </a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card  className='drop-shadow-xl hover:drop-shadow-2xl w-[18rem] m-[15px] bg-white cursor-pointer rounded-[10px]'>
                    <Image src={Siddharth} alt='frontend' layout="responsive" objectFit="cover" className='rounded-[10px]' />
                    <Card.Body>
                        <Card.Title className='text-xl font-bold mx-[15px]d py-[7px] ml-[5px]'>Siddharth Shukla </Card.Title>
                        <Card.Text className='font-semibold ml-[5px]'>Frontend Engineer</Card.Text>
                        <Card.Text className='font-sans py-[7px] ml-[5px]'>
                            <p>Github:-</p>
                            <a href="https://github.com/Tahmeerpasha" className='hover:text-blue-600 ml-[5px]'>
                            https://github.com/godslayer15
                            </a>
                            <p>Linked In:-</p>
                            <a href="https://www.linkedin.com/in/siddharth-shukla-65b14b229" className='hover:text-blue-600 ml-[5px]'>
                            https://www.linkedin.com/in/siddharth-shukla-65b14b229
                            </a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card  className='drop-shadow-xl hover:drop-shadow-2xl w-[18rem] m-[15px] bg-white cursor-pointer rounded-[10px]'>
                    <Image src={frontend} alt='frontend' layout="responsive" objectFit="cover" className='rounded-[10px]' />
                    <Card.Body>
                        <Card.Title className='text-xl font-bold mx-[15px]d py-[7px] ml-[5px]'>Pooja P </Card.Title>
                        <Card.Text className='font-semibold ml-[5px]'>Resource Curator</Card.Text>
                        <Card.Text className='font-sans py-[7px] ml-[5px]'>
                            <p>Github:-</p>
                            <a href="https://github.com/Pinkipnair" className='hover:text-blue-600'>
                            https://github.com/Pinkipnair
                            </a>
                            <p>Linked In:-</p>
                            <a href="https://www.linkedin.com/in/pooja-p-a427b5230/" className='hover:text-blue-600'>
                            https://www.linkedin.com/in/pooja-p-a427b5230/
                            </a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card  className='drop-shadow-xl hover:drop-shadow-2xl w-[18rem] m-[15px] bg-white cursor-pointer rounded-[10px]'>
                    <Image src={Tarun} alt='frontend' layout="responsive"  className='rounded-[10px]'/>
                    <Card.Body>
                        <Card.Title className='text-xl font-bold mx-[15px] py-[7px] ml-[5px]'>Tarun Purohit</Card.Title>
                        <Card.Text className='font-semibold ml-[5px]'>Fullstack engineer</Card.Text>
                        <Card.Text className='font-sans py-[7px] ml-[5px]'>
                            <p>Github:-</p>
                            <a href="https://github.com/Tarunpurohit146" className='hover:text-blue-600'>
                            https://github.com/Tarunpurohit146
                            </a>
                            <p>Linked In:-</p>
                            <a href="https://www.linkedin.com/in/tarunpurohitb" className='hover:text-blue-600 w-[50px]'>
                            https://www.linkedin.com/in/<br></br>tarunpurohitb
                            </a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card  className='drop-shadow-xl hover:drop-shadow-2xl w-[18rem] m-[15px] bg-white cursor-pointer rounded-[10px]'>
                    <Image src={frontend} alt='frontend' layout="responsive" objectFit="cover" className='rounded-[10px]' />
                    <Card.Body>
                        <Card.Title className='text-xl font-bold mx-[15px]d py-[7px] ml-[5px]'>Tahmeer Pasha </Card.Title>
                        <Card.Text className='font-semibold ml-[5px]'>Team leader,Fullstack engineer</Card.Text>
                        <Card.Text className='font-sans py-[7px] ml-[5px]'>
                            <p>Github:-</p>
                            <a href="https://github.com/Tahmeerpasha" className='hover:text-blue-600'>
                            https://github.com/Tahmeerpasha
                            </a>
                            <p>Linked In:-</p>
                            <a href="https://www.linkedin.com/in/tahmeer-pasha" className='hover:text-blue-600'>
                            https://www.linkedin.com/in/tahmeer-pasha
                            </a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card  className='drop-shadow-xl hover:drop-shadow-2xl w-[18rem] m-[15px] bg-white cursor-pointer rounded-[10px]'>
                    <Image src={Dikshita} alt='frontend' layout="responsive" objectFit="cover" className='rounded-[10px]' />
                    <Card.Body>
                        <Card.Title className='text-xl font-bold mx-[15px]d py-[7px] ml-[2px]'>Dikshita Purohit</Card.Title>
                        <Card.Text className='font-semibold ml-[2px]'>Backend Engineer</Card.Text>
                        <Card.Text className='font-sans py-[7px] ml-[5px]'>
                            <p>Github:-</p>
                            <a href="https://github.com/Tahmeerpasha" className='hover:text-blue-600'>
                            https://github.com/Tahmeerpasha
                            </a>
                            <p>Linked In:-</p>
                            <a href="https://www.linkedin.com/in/dikshita-b-320543283" className='hover:text-blue-600'>
                            https://www.linkedin.com/in/dikshita-b-320543283
                            </a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Team