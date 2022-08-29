import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { MobileIcon, Nav ,NavbarContainer,NavButton,NavButtonLink,NavItem,NavLinks,NavLogo, NavMenu } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
const Navbar = ({toggle}) => {

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

  const toggleHome = () =>{
    scroll.scrollToTop();
  }

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>knoT</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} > About Us </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Discover </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}> Sign Up </NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to='/signin'>Sign In</NavButtonLink>
          </NavButton>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;