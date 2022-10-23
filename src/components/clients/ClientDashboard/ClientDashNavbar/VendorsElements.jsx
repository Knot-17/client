import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward, IoMdStarOutline } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineFestival } from "react-icons/md";

export const VendorsContainer = styled.div`
  width: 100%;
  height: 320px;
  background-color: #fff;
  padding-top: 20px;
  box-shadow: 0 10px 10px #808080;
`;
export const VLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
export const VH1 = styled.h1`
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
export const StarIcon = styled(IoMdStarOutline)`
  font-size: 20px;
  margin-right: 8px;
`;
export const ChatIcon = styled(IoChatbubbleOutline)`
  font-size: 18px;
  margin-right: 8px;
`;
export const VenIcon = styled(MdOutlineFestival)`
  font-size: 20px;
  margin-right: 8px;
`;
