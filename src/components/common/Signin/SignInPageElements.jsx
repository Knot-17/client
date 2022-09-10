import styled from "styled-components";
import { Link as a } from 'react-router-dom';

export const SignInWrapper = styled.div`
    height:auto;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 50% 50%;
    border-radius: 10px;
    margin-top: 3rem;


    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        height: 700px;
    }

    @media screen and (max-width: 480px){
        height: 400px;
        display: flex;
        flex-direction: column;
    }
`
export const SignInImage = styled.img`
    height: 400px;
    width : 400px;
    padding: 5px;

    @media screen and (max-width: 768px){
        height: 350px;
        width : 350px;
    }

    @media screen and (max-width: 480px){
        height: 200px;
        width : 200px;
    }
`

export const SignInFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
`

export const SignInHead = styled.h1`
    margin-top: 10px;
    font-weight: 900;
    text-transform: uppercase;
    color: #01bf71;
    font-size: x-large;
    `
export const SignInInputBox = styled.div`
    display: flex;
    flex-direction: row;
    row-gap: 1rem;
    width: 100%;
`
export const SignInLinkBox = styled.div`
    display: flex;
    flex-direction: row;
    row-gap: 1rem;
    width: 100%;
    margin-top: 1rem;
    margin-inline-start: 1.5rem;
`

export const MutedLink = styled.div`
    font-size: smaller;
    color: #e5e5e5;
    text-decoration: none;
    font-weight: 800;
    
`

export const ActiveLink = styled(a)`
    font-size: small;
    color: #01bf71;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
`

export const SignInSubmitButton = styled.button`
        color: #fff;
        background-color: #01bf71;
        border-radius: 5px;
        padding: 2px;
        font-weight: bold;
        width: 50%;
        height: 2.5rem;
        margin-top: 2rem;
        margin-bottom: 2rem;

        :hover{
            opacity:0.9 ;
        }
`


export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`

export const FieldError = styled.span`
  color: #b32e2e;
  font-size: 11px;
`;

export const FormSuccess = styled.span`
  color: #28a828;
  font-size: 12px;
  min-height: 20px;
  font-weight: 600;
`;

export const FormError = styled.span`
  color: #b32e2e;
  font-size: 11px;
`;