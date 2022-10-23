
import React, { useEffect, useState } from 'react';

import {  Nav ,NavbarContainer,NavButton,NavButtonLink,NavItem,ClientNavLogo, NavMenu } from './ClientNavbarElements';
import PlaningTools from './PlaningTools';
import Vendors from './Vendors'

const ClientNavbar = ({toggle}) => {

  const [scrollNav,setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    }
    else{
      setScrollNav(false)
    }
  }

  useEffect(() => {window.addEventListener('scroll',changeNav)},[] )

  const [displayPTools,setDisplayPTools] = useState(false);

  const [displayVendors,setDisplayVendors] = useState(false);

  
 

  return (
    <Nav scrollNav={scrollNav}>
       <NavbarContainer>
        <div>
           <ClientNavLogo>knoT</ClientNavLogo>
          
          
          
          <NavMenu>
            <NavItem className={` ${displayPTools? "border-b-[3px] border-red-500": ""}`}>
             <button className={` mt-[5px] ${scrollNav=== false? "text-black" : "text-white"}`}
            
            
             onClick={() => { 
                if(displayPTools===false&&displayVendors===false){
                  
                  setDisplayPTools(true);
                }
                else if(displayPTools===false&&displayVendors===true){
                  setDisplayVendors(false);
                  setDisplayPTools(true);

                }
                else {
                  setDisplayPTools(false);
                }
              }}
             >Planing Tools</button>
            </NavItem>
            <NavItem className={`ml-[20px] ${displayVendors? "border-b-[3px] border-red-500": ""}`}>
             <button  className={`  mt-[5px] ${scrollNav=== false? "text-black" : "text-white"}`}
              onClick={() => {
                if(displayPTools===false&&displayVendors===false){
                  
                  setDisplayVendors(true);
                  
                }
                else if(displayPTools===true&&displayVendors===false) {
                  setDisplayPTools(false);
                  setDisplayVendors(true);
                  
                }
                else{
                  setDisplayVendors(false);
                }
              }}
             >Vendors</button>
            </NavItem>
            
          </NavMenu>
        </div>
         
          <NavButton>
            <NavButtonLink >Your Account</NavButtonLink>
          </NavButton>
         
      </NavbarContainer>
      <div className={`${displayPTools=== false? "hidden" : "block"}`}>
        <PlaningTools/>
      </div>
      <div className={`${displayVendors=== false? "hidden" : "block"}`}>
        <Vendors/>
      </div>
      
    </Nav>
  )
}

export default ClientNavbar;