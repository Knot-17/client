import React, { useState } from 'react';
import Footer from '../components/clients/Footer';
import HeroSection from '../components/clients/ClientDashboard/ClientDashHeroSection';


import ClientNavbar from '../components/clients/ClientDashboard/ClientDashNavbar'



const ClientDash = () => {

  
  

  return (
      <>
        
        <ClientNavbar />
        <HeroSection/>
        
        <Footer/>
        <h1 className='mt-[300px]'>Helloo</h1>
      </>
  )
}

export default ClientDash;