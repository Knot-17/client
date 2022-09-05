import React ,{useState} from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper ,ArrowForward,ArrowRight } from './servicesElements'
import Destination from '../../../images/destinations.svg'
import Photography from '../../../images/photography.svg'
import Cattering from '../../../images/cattering.svg'
import Decorators from '../../../images/decorators.svg'
import Music from '../../../images/Music.png'
import Beauty from '../../../images/Beauty.png'

import {useHistory} from 'react-router-dom';


import { Button } from '../../ButtonElements';

const Services = () => {
    const history = useHistory();
    const [hover,setHover] =useState(false);
    const onHover = ()=>{
      setHover(!hover)
    }

    const navigateToVendors = () => {
        history.push('/user')
    }
  return (
    <>
        <ServicesContainer id='services'>
            <ServicesH1> Our Services </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Destination} />
                    <ServicesH2> Destinations </ServicesH2>
                    <ServicesP>  </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Photography}/>
                    <ServicesH2> Photography </ServicesH2>
                    <ServicesP>  </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Cattering}/>
                    <ServicesH2> Catering </ServicesH2>
                    <ServicesP>  </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Decorators}/>
                    <ServicesH2> Decorators  </ServicesH2>
                    <ServicesP>   </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Music}/>
                    <ServicesH2> Music Band  </ServicesH2>
                    <ServicesP>   </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Beauty}/>
                    <ServicesH2> Beauticians  </ServicesH2>
                    <ServicesP>   </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            <Button onClick={navigateToVendors} to='' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' > Explore Services {hover ? <ArrowForward/> : <ArrowRight/>}  </Button>
        </ServicesContainer>
    </>
  )
}

export default Services