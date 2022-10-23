import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroF1Container = styled.div`
  height: auto;
  border-radius: 15px;
  width: 100%;
`;

export const ClientHeroLinks = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;

  height: 250px;
  width: 45%;
  box-shadow: 0 8px 10px #000;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
  /* margin-left: auto;
margin-right: auto; */
  margin-top: 30px;

  @media screen and (max-width: 1024px) {
    height: 200px;
  }

  @media screen and (max-width: 768px) {
    height: 150px;
  }

  @media screen and (max-width: 480px) {
    height: 100px;
  }
`;
export const VendorsH1 = styled.h1`
  margin-left: 10px;
  font-weight: 700;
  font-size: 28px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
