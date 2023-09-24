import Navbar from '@/components/Navbar'
import ProblemStatement from '@/components/ProblemStatement'
import Reason from '@/components/Reason'
import Getstarted from '@/components/getstarted'
import Main from '@/components/Main'
import Flowchart from '@/components/Flowchart'
import UseCases from '@/components/UseCases'
import Dependencies from '@/components/Dependencies'
import Footer from '@/components/Footer'
import Team from '@/components/Team'
export default function Home() {

  return (
    <div>
      <Navbar />
      <Main />
      <ProblemStatement />
      <Reason />
      <UseCases />
      <Dependencies />
      <Flowchart />
      <Team/>
      <Footer/>
    </div>
  )
}
