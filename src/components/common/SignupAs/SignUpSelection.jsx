import React from 'react'
import { SignUpSelectionContainer, SignUpSelectionWrapper ,SignUpLeftContainer ,ImageContainer,SignUpRightContainer,SignUpRightContainerHeading,SignUpButtonContainer, ButtonLayout, ButtonImage } from './SignUpSelectionElements'
import Image from '../../../images/Choose.gif'
import Client from '../../../images/Client.png'
import Dealer from '../../../images/Dealer.png'

import { Link } from 'react-router-dom'

import styled from 'styled-components';


const Container =styled.div`  
`
const SignUpSelection = () => {
  return (
    <Container>
        <SignUpSelectionWrapper>
            <SignUpSelectionContainer>
                <SignUpLeftContainer>
                    <ImageContainer src={Image} alt="Image" />
                </SignUpLeftContainer>
                <SignUpRightContainer>
                    <SignUpRightContainerHeading>Choose your role</SignUpRightContainerHeading>
                    <SignUpButtonContainer>
                       <Link to="/signup"> <ButtonLayout  ><ButtonImage src={Client} />Client</ButtonLayout></Link>
                       <Link to="/signupdealers"> <ButtonLayout ><ButtonImage src={Dealer} />Dealer</ButtonLayout></Link>
                    </SignUpButtonContainer>
                </SignUpRightContainer>
            </SignUpSelectionContainer>
        </SignUpSelectionWrapper>
    </Container>
  )
}

export default SignUpSelection