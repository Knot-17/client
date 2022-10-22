import styled , {keyframes} from "styled-components";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
 
export const InstrumentsContainer = styled.div`
    
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    height: 30px;
    width: 140px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-left: 0.5%;
    display: flex;
    &:hover{
           background-color: #f2f2f2;
         }
    @media screen and (max-width:480px){
    width: 100px;
    
    }

`
export const DistanceContainer = styled.div`
    
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    height: 30px;
    width: 110px;
    align-items: center;
    justify-content: center;
    display: flex;
    
    &:hover{
           background-color: #f2f2f2;
         }
         @media screen and (max-width:480px){
    display: none;
    
    }

`
export const MusicGernsContainer = styled.div`
    
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    height: 30px;
    width: 140px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-left: 0.5%;
    &:hover{
           background-color: #f2f2f2;
         }
         @media screen and (max-width:480px){
    display: none;
    
    }

`
// export const SupportDiversityContainer = styled.div`
    
//     cursor: pointer;
//     border: 1px solid #000;
//     border-radius: 20px;
//     font-size: 13px;
//     font-weight: 500;
//     height: 30px;
//     width: 8%;
//     align-items: center;
//     justify-content: center;
//     display: flex;
//     margin-left: 0.5%;
//     &:hover{
//            background-color: #f2f2f2;
//          }

// `
// export const AwardWinnersContainer = styled.div`
    
//     cursor: pointer;
//     border: 1px solid #000;
//     border-radius: 20px;
//     font-size: 13px;
//     font-weight: 500;
//     height: 30px;
//     width: 110px;
//     align-items: center;
//     justify-content: center;
//     display: flex;
//     margin-left: 0.5%;
//     &:hover{
//            background-color: #f2f2f2;
//          }
//          @media screen and (max-width:480px){
//     display: none;
    
//     }

// `
export const MoreFiltersContainer = styled.div`
    
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    height: 30px;
    width: 110px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-left: 0.5%;
    &:hover{
           background-color: #f2f2f2;
         }
         @media screen and (max-width:480px){
    width: 100px;
    margin-left: 10px;
    
    }

`
export const InstrumentsForm= styled.form `
    
    width: 100%;
   

`
export const MusicGernsForm= styled.form `
    
    width: 100%;
   

`
export const DistanceForm = styled.form `
    
    width: 100%;
   

`
export const DropdownContainer = styled.div`
     box-shadow: 0 4px 5px #cccccc;
     background-color: #fff;
    width: 16%;
    position:absolute;
    z-index:1;
    margin-top: 10px;
    @media screen and (max-width:480px){
    width: 200px;
    }

    
    
    

`
export const ButtonContainer = styled.div`
   
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-top: 1px solid #bfbfbf;
`

export const ClearButton = styled(Link)`

   width: 40%;
   color: #3333ff;
   height: 30px;
  
   margin-left: 10px;
   
  
`
export const SaveButton = styled.button `

   width: 40%;
   color: #fff;
   background-color: #ff7777;
   height: 30px;
   font-weight: 500;
   margin-left: auto;
   margin-right: 10px;
   
   &:hover{
           background-color: #cd4747;
         }
`
export const anim = keyframes`
    from{width:380px; }
    to{ width:500px }
`
export const MoreFilters = styled.div `
     width: 500px;
     height: auto;
    margin-left: auto;
     background-color: #fff;
    
     animation: ${anim} 0.1s linear  ; 
    
`
export const MoreFiltersWrapper= styled.div `
     /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
   /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    
`
export const MoreFiltersH1 = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  
`

export const CloseIcon = styled(IoCloseOutline)`
  font-size: 48px;
  cursor: pointer;
  margin-left: auto;
`