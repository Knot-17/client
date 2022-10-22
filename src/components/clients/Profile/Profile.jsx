import React from 'react'
import { MainContainer , ContentContainer,ProfileContainer, TitleContainer , Title } from './profileElements'
import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from './sideBar'
import Routes from './Routes/Routes'
import Footer from './../../home/Footer'

import styled from 'styled-components';

const Container =styled.div`
   
    
`


const Profile = () => {
  return (
    <Container>  <BrowserRouter>
            <MainContainer>
                <ContentContainer>
                        <TitleContainer>
                            <Title> Account Settings </Title>
                        </TitleContainer>
                    
                        <Route render={(props)=>(

                            <Sidebar {...props}/>
                        )} />
                        
                </ContentContainer>
                <ProfileContainer>
                    {Routes.map(props => <Route exact {...props} />)}
                </ProfileContainer>
            </MainContainer>
            <Footer/>
        </BrowserRouter>
    </Container>
  )
}

export default Profile