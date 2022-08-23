import React from 'react'
import styled from "styled-components";

export const SignupContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

export const SignupWrapper = styled.div`
    height:800px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 50% 50%;
    border-radius: 10px;
    background-color:#e5e5e5;
    box-shadow: 3px 3px 3px 3px;


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
export const SignupImage = styled.img`
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

export const SignupForm = styled.form`
    
`

