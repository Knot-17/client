import React from 'react'
import { MainContainer , ContentContainer,ProfileContainer, TitleContainer , Title } from './dashboardElements'
import { BrowserRouter, Route } from 'react-router-dom'
import Sidebar from './sideBar'
import Routes_Admin from './Routes/Routes_Admin'

import styled from 'styled-components';


const Container =styled.div`
   
    
`

const Dashboard = () => {
  return (
    <Container>  
        <BrowserRouter>
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
                    {Routes_Admin.map(props => <Route exact {...props} />)}
                </ProfileContainer>
            </MainContainer>
        </BrowserRouter>
    </Container>
  )
}

export default Dashboard;