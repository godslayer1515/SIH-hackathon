import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Reason from '@/components/Reason'
import Getstarted from '@/components/getstarted'
import Main from '@/components/Main'
import Flowchart from '@/components/Flowchart'
import UseCases from '@/components/UseCases'
import Dependencies from '@/components/Dependencies'
export default function Home() {
  const headerlinks = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "LINK2",
    },
    {
      id: 3,
      name: "LINK3",
    },
    {
      id: 4,
      name: "LINK4",
    },
    {
      id: 5,
      name: 'LINK5',
    },
    {
      id: 6,
      name: "LINK6",
    },
    {
      id: 7,
      name: "LINK7",
    },
  ]
  return (
    <div>
      <Header links={headerlinks} />
      <Main />
      <Hero />
      <Reason />
      <UseCases />
      <Dependencies />
      <Flowchart />
      <Getstarted />
    </div>
  )
}
