import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './servicesElements'
import Destination from './../../images/destinations.svg'
import Photography from './../../images/photography.svg'
import Cattering from './../../images/cattering.svg'
import Decorators from './../../images/decorators.svg'
import Music from './../../images/Music.png'
import Beauty from './../../images/Beauty.png'

const Services = () => {
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
        </ServicesContainer>
    </>
  )
}

export default Services