import React, { useState } from "react";
import Footer from "../components/home/Footer";
import HeroSection from "../components/home/HeroSection";
import InfoSection from "../components/home/infoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/home/infoSection/data";
import Navbar from "../components/home/Navbar";
import Services from "../components/home/ServicesSection";
import Sidebar from "../components/home/Sidebar";
import styled from "styled-components";

const Container = styled.div``;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services />
      <Footer />
    </Container>
  );
};

export default Home;
