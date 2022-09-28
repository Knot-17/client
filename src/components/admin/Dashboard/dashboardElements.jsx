import styled from 'styled-components'


export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 6fr;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    background-color: var(--second-white);

    @media screen and (max-width: 560px) {
        display: flex;
        flex-direction: column;
    }

`

export const ContentContainer = styled.div`
    display:flex;
    flex-direction : column ;
    align-items:center;
    width:100%;
    min-height:100%;
    background-color: var(--second-white);
    border-right: 2px solid var(--main-green);
`

export const ProfileContainer = styled.div`
    display:flex;
    flex-direction : column ;
    width:100%;
    min-height:100%;
    padding-left: 20px;
    background-color: var(--second-white);
`

export const TitleContainer = styled.div`
    display:flex;
    flex-direction : column ;
    justify-content:center;
    align-items:center;
    width:100%;
    height: auto;
    background-color: var(--main-green);
    color:var(--second-white);
    margin-bottom: 20px;
    `

export const Title = styled.h1`
    font-size:1.5rem;
    font-weight:bold;
    text-align:center;
    margin-bottom:20px;
    margin-top: 5px;
    `
export const ListContainer = styled.div`
    display:flex;
    flex-direction : column ;
    align-items: center;
    `

export const FormContainer = styled.div`
    display: flex;
    flex-direction : column;
    margin-top: 60px;
    margin-left: 20px;
    width: 70%;
    height: auto;
    background-color: var(--second-white);
    border-radius: 10px;

    @media screen and (max-width: 950px) {
        width:90%;
        margin-top: 0;
    }
`

export const Form = styled.form`
    display:flex;
    flex-direction : column ;
    width:100%;
`

export const InputContainerDouble = styled.div`
   display: grid;
   grid-template-columns: 47% 47%;
   justify-content: space-between;
   margin-left: 10px;
   @media screen and (max-width: 950px) {
        display:flex;
        flex-direction : column ;
        width:90%;
    }
`

export const ButtonContainer = styled.div`
   display: flex;
   width: 50%;
   justify-content: space-between;
   margin-left: 10px;
`

export const ButtonElement = styled.button`
    color: var(--second-white);
    background-color: var(--main-green);
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px 0px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        background-color: var(--main-green-hover);
    }
`


export const ButtonElementEdit = styled.button`
    color: var(--second-white);
    background-color: var(--danger-red);
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px 0px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        background-color: var(--danger-red-hover);
    }
`

export const InputContainerLeft = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-block-end: 1rem;   
`

export const InputContainerCheckbox = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Label = styled.div`
    font-weight: bold;
    height: 2rem;
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
    height: 2.5rem;
    color: rgb(34, 32, 32);
`

export const Select = styled.select`
    padding: 1px;
    padding-right: 2px;
    padding-left: 2px;
    outline: none;
    width: 100%;
    height: 2.5rem;
    color: rgb(34, 32, 32);
`

export const SubTitle = styled.h2`
    font-size:1.5rem;
    font-weight:bold;
    margin-left: 10px;
`


export const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
`


export const InputContainerSingle = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    width: 50%;
    height:auto;
`
 export const Margin = styled.hr`
    width: 50%;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 2px solid var(--main-green);
 `