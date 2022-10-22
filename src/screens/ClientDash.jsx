import React from 'react';
import Footer from './../components/clients/Footer';
import HeroSection from './../components/clients/ClientDashboard/ClientDashHeroSection';
import styled from 'styled-components';

import ClientNavbar from './../components/clients/ClientDashboard/ClientDashNavbar'

const Container =styled.div`
  
    
`



const ClientDash = () => {
  return (
        <Container>
          <ClientNavbar />
          <HeroSection/>
          
          <Footer/>
        </Container>
  )
}
export default ClientDash;