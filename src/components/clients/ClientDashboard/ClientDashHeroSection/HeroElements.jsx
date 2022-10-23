import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export const HeroContainer1 = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 1;
  background: #019859;
  margin-top: 140px;
  width: 100%;
`;
export const HeroContainer2 = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  z-index: 1;
  background: #019859;
  width: 100%;
`;

export const HeroH2 = styled.h2`
  color: #fff;

  font-size: 28px;

  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const HeroH2Container = styled.div`
  width: 600px;
  display: block;
  margin-top: 50px;
  margin-left: 8.5%;
`;

export const HeroH3 = styled.h2`
  font-size: 28px;
  margin-left: 8.5%;
  margin-top: 30px;

  font-weight: 700;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export const ArrowDownIcon = styled(IoIosArrowDown)`
  font-size: 32px;

  margin-right: 10px;
  display: flex;
`;
export const ArrowForwardIcon = styled(IoIosArrowForward)`
  font-size: 32px;

  margin-right: 10px;
  display: flex;
`;
export const HeroH3Border = styled.div`
  display: flex;
  border-bottom: 2px solid #fff;
  margin-bottom: 17px;
  margin-left: 8px;
  width: 1120px;
`;
