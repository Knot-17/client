import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  IoIosList,
  IoIosRadioButtonOff,
  IoMdCheckmarkCircle,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";

export const Checklist = styled.div`
  width: 45%;
  height: 500px;
  background-color: #fff;
  box-shadow: 0 8px 10px #4d4d4d;

  margin-right: 3.5%;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;
export const ChecklistLink = styled.a`
  display: flex;
  cursor: pointer;
  /* margin-left: auto;
margin-right: auto; */
  margin-top: 5%;
`;

export const YourBudget = styled.div`
  width: 100%;
  height: 200px;
  background-color: #fff;
  box-shadow: 0 8px 10px #4d4d4d;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    height: 140px;
  }
`;

export const YourWeddingH1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-left: 8.5%;
  margin-top: 50px;
`;
export const ListIcon = styled(IoIosList)`
  font-size: 32px;
  margin-left: 25px;
  margin-right: 10px;
`;
export const RadioIcon = styled(IoIosRadioButtonOff)`
  font-size: 24px;
  margin-left: 25px;
  margin-right: 10px;
  color: #a6a6a6;
`;
export const SelectIcon = styled(IoMdCheckmarkCircle)`
  font-size: 24px;
  margin-left: 25px;
  margin-right: 10px;
  color: #004d00;
`;
export const DollarIcon = styled(BsCurrencyDollar)`
  font-size: 24px;
  margin-left: 25px;
  margin-top: 5%;
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
export const YourWeddingH1Border = styled.div`
  display: flex;
  border-bottom: 2px solid #fff;
  margin-bottom: 17px;
  margin-left: 8px;
  width: 1035px;
`;
export const YWLink = styled(Link)`
  cursor: pointer;
  color: #0099ff;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-left: 10%;
  }
`;
