import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/ClientDashboard/ClientDashHeroSection';


import ClientNavbar from '../components/ClientDashboard/ClientDashNavbar'



const ClientDash = () => {

  
  

  return (
      <>
        
        <ClientNavbar />
        <HeroSection/>
        
        <Footer/>
      </>
  )
}

export default ClientDash;