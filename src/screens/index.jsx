import React, { useState } from 'react';
import Footer from '../components/home/Footer';
import HeroSection from '../components/home/HeroSection';
import InfoSection from '../components/home/infoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/home/infoSection/data';
import Navbar from '../components/home/Navbar'
import Services from '../components/home/ServicesSection';
import Sidebar from '../components/home/Sidebar'

const Home = () => {

  
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Services/>
        <Footer/>
      </>
  )
}

export default Home