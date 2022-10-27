import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  width: 700px;
  height: 450px;
  background-color: #fff;
  padding-top: 25px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
`;
export const CheckBox = styled.div`
  width: 40%;
  height: 420px;
  padding-top: 50px;
`;
export const CheckBoxCont = styled.div`
  width: 70%;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #000;
`;
export const AmountH1 = styled.h1`
  color: #01bf71;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  font-size: 20px;
`;
export const Amount = styled.div`
  display: flex;
  height: 30px;
  width: 70%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #cccccc;
  justify-content: center;
  align-items: center;
`;
export const Payment = styled.div`
  width: 60%;
  height: 400px;
  border-left: 1px solid #cccccc;
`;
export const PayH1 = styled.h1`
  font-size: 24px;
  color: #01bf71;
  width: 220px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
`;
export const Pay = styled.button`
  width: 100%;
  height: 40px;
  color: #fff;
  font-weight: 500;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #01bf71;
  &:hover {
    background-color: #068550;
  }
`;
