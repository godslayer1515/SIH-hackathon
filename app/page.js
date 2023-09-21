import Image from 'next/image'
import Header from '@/components/Header'
// import Hero from '@/components/Hero'

export default function Home() {
  const headerlinks = [
    {
      id:1,
      name:"HOME",
    },
    {
      id:2,
      name:"LINK2",
    },
    {
      id:3,
      name:"LINK3",
    },
    {
      id:4,
      name:"LINK4",
    },
    {
      id:5,
      name:'LINK5',
    },
    {
      id:6,
      name:"LINK6",
    },
    {
      id:7,
      name:"LINK7",
    },
  ]
  return (
    <div>
      <Header  links = {headerlinks}/>
      {/* <Hero/> */}
    </div>
  )
}
