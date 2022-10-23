import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosList, IoIosArrowRoundForward } from "react-icons/io";

import { MdOutlinePaid, MdPeopleOutline } from "react-icons/md";

export const PlaningToolsContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #fff;
  padding-top: 20px;
  box-shadow: 0 10px 10px #808080;
`;
export const PH1 = styled.h1`
  font-weight: 500;
  font-size: 20px;
  margin-left: 8.5%;
  font-family: sans-serif;
  display: flex;
`;
export const ArrowForwardIcon = styled(IoIosArrowRoundForward)`
  font-size: 32px;

  margin-right: 10px;
  display: flex;
`;
export const PLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
export const ListIcon = styled(IoIosList)`
  font-size: 20px;
  margin-right: 8px;
`;
export const DollarIcon = styled(MdOutlinePaid)`
  font-size: 20px;
  margin-right: 8px;
`;
export const PeopleIcon = styled(MdPeopleOutline)`
  font-size: 20px;
  margin-right: 8px;
`;
