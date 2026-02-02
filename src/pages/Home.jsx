import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Services from '../sections/Services'
import Testimonials from '../sections/Testimonials'

const Home = () => {
  return (
    <div> 
      <Hero />
      <About />
      <Contact />
      <Services />
      <Testimonials />
    </div>
  )
}

export default Home
