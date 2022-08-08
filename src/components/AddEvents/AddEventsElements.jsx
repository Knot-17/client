import styled from 'styled-components';


export const MainContainer = styled.div`
  display:flex;
  background: #fff;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  
`

export const PrimaryContainer = styled.div`
  display:flex;
  background: #fff;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;

  @media screen and (max-width:880px){     
    width: 100%;
    }

  `

export const SecondaryContainer =styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    background: #fff;
    padding: 5px;
    height: 95%;
    width: 95%;
    border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    box-shadow: 3px 3px #f5f5f5;
    
    border-left: solid 2px;
    border-left-color: #01bf71;
    border-top: solid 2px;
    border-top-color: #01bf71;

    @media screen and (max-width:720px){     
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow:scroll; 
    }
`

export const ImageContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:480px){
        display: none;
    }
`

export const ImageBox = styled.img`
    height: auto;
    width: auto;
    margin: 0 0 10px 0;

    @media screen and (max-width:480px){
        display: none;
    }

    @media screen and (max-width:720px){
        height: 200px;
        width: 200px;
        margin-top:300px;
    }
    @media screen and (max-width:880px){
        height: auto;
        width: auto;
    }
    @media screen and (max-width:780px){
        height: 350px;
        width: 350px;
    }
    
`

export const FormContainer = styled.div`
    display:flex;
    flex-direction: column; 
`

export const TitleContainer = styled.h1`
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;

    @media screen and (max-width:480px){
        font-size: 20px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputContainerLeft = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-block-end: 1rem;
    
`



export const Label = styled.div`
    font-weight: bold;
    height: 1.5rem;
    margin-top: 3px;
    color: #717171;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    line-height: 2rem;
`



export const InputBox = styled.div`
    display:flex;
    border: solid;
    border-color: #f5f5f5;
    border-radius: 5px;
    margin-top: 2px;
    margin-bottom: 2px;
`

export const Input = styled.input`
    padding: 1px;
    padding-right: 2px;
    padding-left: 2px;
    appearance: none;
    outline: none;
    width: 100%;
    height: 2rem;
    color: rgb(34, 32, 32);
`

export const InputContainerFull = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    position:relative;
    flex: 1;
`

export const InputContainerDouble = styled.div`
    display:grid;
    grid-template-columns: 47% 47%;
    justify-content: space-between;
    position:relative;
    flex: 1;
`

export const InputContainerSingle = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 47%;
    position:relative;
    flex: 1;
`

export const ButtonContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    position:relative;
    margin-top: 1.5rem;
`

export const Button = styled.button`
    display:flex;
    justify-content: center;
    width: 47%;
    position:relative;
    align-items: center;
    background-color: #01bf71 ;
    border: 1px solid;
    font-weight: 700;
    height: 40px;
    color: #fff;
    border-radius: 8px;

    :hover{
        opacity: 0.8;
        transition:all 0.9s ease-in-out;
    }
`