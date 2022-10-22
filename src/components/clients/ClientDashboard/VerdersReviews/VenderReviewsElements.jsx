import styled from 'styled-components';
import VRBack from './../../../images/VRBack.jpg'

export const VRContainer = styled.div`
    margin-top: 140px;
    min-width: 500px;
`
export const Container = styled.div`
    height: 450px;
    background-image: url(${VRBack});
    width: 85%;
    margin-left: 8.5%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 30px;
  padding-left: 50%;
`
export const PH1 =styled.h1`
   
    font-size: 28px;
    font-weight: 600;
  
    
    @media screen and (max-width:1024px){
        font-size: 20px;
    }
 

@media screen and (max-width:768px){
    font-size: 20px;
    }
 
@media screen and (max-width:480px){
    font-size: 12px;
    margin-left: 8.5%;
    margin-top: 10px;
    
    }

`
export const PH2 =styled.h1`
   
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px;
  
    
    @media screen and (max-width:1024px){
        font-size: 16px;
    }
 

@media screen and (max-width:768px){
    font-size: 16px;
    }
 
@media screen and (max-width:480px){
    font-size: 12px;
    margin-left: 8.5%;
    margin-top: 10px;
    
    }

`
export const YourReviewsH1Container = styled.div`
    margin-top: 50px;
    width: 40%;
    height: 50px;
    margin-left: auto;
    margin-right: auto; 
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:475px){
    display: block;
    margin-top: 50px;
    width: 100%;
    margin-left: 0%;
    
   
    
    }
`