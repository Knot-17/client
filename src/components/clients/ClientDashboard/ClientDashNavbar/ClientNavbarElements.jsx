import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 102px;
  width: 100%;
  margin-top: -140px;
  min-width: 500px;

  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0%;
  z-index: 30;
`;

export const NavbarContainer = styled.div`
  display: flex;

  justify-content: space-between;
  height: 90px;
  z-index: 1;
  width: 85%;

  margin-bottom: 10px;
  margin-left: 8.5%;
`;

export const ClientNavLogo = styled(LinkR)`
  color: #01bf71;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-top: 30px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;

  align-items: center;
  list-style: none;
`;
export const NavItem = styled.li`
  height: 35px;

  align-items: center;
  &:hover {
    border-bottom: 3px solid #ff4d4d;
  }
`;

export const NavButton = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavButtonLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  border: 1px solid #01bf71;
  margin-top: 30px;
  cursor: pointer;
  transition: all 02s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    padding: 10px 11px;
  }
`;
