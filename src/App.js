import React from 'react'
import HeroSection from './Component/Home/Navbar'
import Footer from './Component/Home/Footer'
import TestimonialContactSection from './Component/Home/Testimonial'
import ProcessSection from './Component/Home/Process'
import About from './Component/Home/About'
import Portfolio from './Component/Home/Portfolio'
import Services from './Component/Home/Services'
import WhyChooseUs from './Component/Home/WhyChoose'
import OurTeam from './Component/Home/OurTeam'
import Contact from './Component/Home/Contact'
import Career from './Component/Home/Career'
import BrandLogosBar from './Component/Home/BrandColor'
import ServicesCarousel from './Component/Home/ServiceCrousel'
import OurProducts from './Component/Home/Product'

const App = () => {
  return (
    <div>
       <HeroSection />
      <About />
      <Portfolio/>

      <ServicesCarousel/>
      
      <OurProducts />
      <BrandLogosBar/>
      <WhyChooseUs/>
      <ProcessSection/>
      
      <Career />
      <OurTeam />
      <TestimonialContactSection/>
      <Contact />

  

     <Footer/>
     
    </div>
  )
}

export default App
