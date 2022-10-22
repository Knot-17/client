import React, { useState } from 'react'
import useCollapse from "react-collapsed";
import {  HeroContainer1,HeroContainer2,HeroH2,HeroH3,HeroH2Container, ArrowDownIcon, ArrowForwardIcon, HeroH3Border} from './HeroElements';


import Vendors from '../ClientDashContent/Vendors';
import YourWedding from '../ClientDashContent/YourWedding';


import styled from 'styled-components';


const Container =styled.div`  
`
const HeroSection = () => {

  const [isExpanded, setExpanded] = useState(true)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded }); 
 
  return (
    <Container>
        <HeroContainer1>
          <HeroH2Container>
            <HeroH2>Welcome back, You & Yours!</HeroH2>
          </HeroH2Container>
          <div className='flex '>
            
             <HeroH3 className='flex'> 
              <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ?  <ArrowDownIcon/> : <ArrowForwardIcon/>}
      </button>
      Vendors</HeroH3>
            <HeroH3Border/>
          </div>
            <section {...getCollapseProps()}>
            <Vendors/>
            </section>
          

        </HeroContainer1>
        <HeroContainer2>
          <YourWedding/>
        </HeroContainer2>
    </Container>
  )
}

export default HeroSection;