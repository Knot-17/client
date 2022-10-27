import React from "react";
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideButtonWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About us
          </SidebarLink>
          <SidebarLink to="Discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="Services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="Sign Up" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideButtonWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideButtonWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
