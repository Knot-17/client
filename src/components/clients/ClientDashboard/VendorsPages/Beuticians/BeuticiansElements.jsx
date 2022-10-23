import styled from 'styled-components';
import { IoIosArrowDown,IoIosArrowUp} from "react-icons/io";
import { IoCameraOutline,IoCloseCircleOutline,IoSearchOutline  } from "react-icons/io5";

import { GiGuitar,GiCommercialAirplane,GiButterflyFlower,GiForkKnifeSpoon,GiLipstick } from "react-icons/gi";

export const PContainer = styled.div`
    margin-top: 140px;
    min-width: 500px;
`

export const PH1Container = styled.div`
    margin-top: 200px;
    
    display: flex;
    width: 85%;
    justify-content: space-between;
    margin-left: 8.5%;
    

    @media screen and (max-width:475px){
    display: block;
    margin-top: 170px;
    width: 100%;
    margin-left: 0%;
    
   
    
    }
`


export const PH1 =styled.h1`
   
    font-size: 28px;
  
    
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

export const CategoryWrapper = styled.div`
    width: 250px;
    background-color: #fff;
    cursor: pointer;
    height: 60px;
    box-shadow: 0 4px 5px #cccccc;
    border-radius: 8px 0 0 8px;
    margin-left: 50px;
    padding-top: 5px;

    @media screen and (max-width:1024px){
        width: 200px;
    }
 

@media screen and (max-width:768px){
    width: 150px;
    }
 
@media screen and (max-width:480px){
    width: 150px;
    margin-left: 8.5%;
    }

    
`
export const CategoryContainer = styled.div`
    
    margin-left: 10px;
   
    
`
export const ArrowDown = styled(IoIosArrowDown)`
    font-size: 24px;
    margin-left: auto;
    margin-right: 5%;
    @media screen and (max-width:768px){
    
    font-size: 16px;
    }
    @media screen and (max-width:480px){
    display: none;
    }
    
    
`
export const ArrowUp = styled(IoIosArrowUp)`
     font-size: 24px;
     margin-left: auto;
    margin-right: 5%;
    @media screen and (max-width:768px){
    
    font-size: 16px;
    }
    @media screen and (max-width:480px){
    display: none;
    }
    
`
export const CameraIcon = styled(IoCameraOutline )`
     font-size: 24px;
     @media screen and (max-width:768px){
      display: none;
    }
    
`
export const GuitarIcon = styled(GiGuitar)`
     font-size: 24px;
     @media screen and (max-width:768px){
        display: none;
    }
    
`

export const PlaneIcon = styled(GiCommercialAirplane)`
     font-size: 24px;
     @media screen and (max-width:768px){
        display: none;
    }
`
export const FlowerIcon = styled(GiButterflyFlower)`
     font-size: 24px;
     @media screen and (max-width:768px){
        display: none;
    }
`
export const SpoonIcon = styled(GiForkKnifeSpoon)`
     font-size: 24px;
     @media screen and (max-width:768px){
        display: none;
    }
`
export const LipstickIcon = styled(GiLipstick)`
     font-size: 24px;
     @media screen and (max-width:768px){
        display: none;
    }
`
export const CloseIcon = styled(IoCloseCircleOutline)`
     font-size: 24px;
     color: #ccc;
     
    
`
export const SearchIcon = styled(IoSearchOutline)`
     font-size: 24px;
     
    
`
export const DropDownContainer = styled.div`
    background-color: #fff;
    width: 250px;
    box-shadow: 0 4px 10px #cccccc;
    border-radius: 8px;
    height: auto;
    position: absolute;
    z-index: 1;
    margin-top: 15px;
    font-size: 14px;
    @media screen and (max-width:1024px){
        width: 200px;
    }
 

@media screen and (max-width:768px){
    width: 150px;
    font-size: 10px;
    }
 
@media screen and (max-width:480px){
    width: 150px;
    }
`
export const DropDownContainerL = styled.div`
    background-color: #fff;
    width: 250px;
    box-shadow: 0 4px 10px #cccccc;
    border-radius: 8px;
    height: auto;
    margin-top: 15px;
    @media screen and (max-width:1024px){
        width: 200px;
    }
 

@media screen and (max-width:768px){
    width: 150px;
    }
 
@media screen and (max-width:480px){
    width: 100px;
    }
`
export const LocationWrapper = styled.div`
    width: 250px;
    background-color: #fff;
    cursor: pointer;
    height: 60px;
    box-shadow: -1px 4px 5px #cccccc;
    padding-top: 5px;
    @media screen and (max-width:1024px){
        width: 200px;
    }
 

@media screen and (max-width:768px){
    width: 150px;
    }
 
@media screen and (max-width:480px){
    width: 100px;
    }
   
   

    
`
export const LocationContainer = styled.div`
   
    margin-left: 10px;
    
    
`
export const SearchButton = styled.button`
    height: 60px;
    width: 50px;
    padding: 15px;
    box-shadow: -1px 4px 5px #cccccc;
    border-radius: 0 8px 8px 0;
    background-color: #fff;
    ;

`