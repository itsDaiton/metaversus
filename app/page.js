import { Hero, About, Explore, GetStarted, WhatsNew, World, Insights, Feedback } from '../sections'
import { Navbar, Footer } from '../components'

const Page = () => {
  return (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Explore/>
      <GetStarted/>
      <WhatsNew/>
      <World/>
      <Insights/>
      <Feedback/>
      <Footer/>   
    </div>
  )
}

export default Page
