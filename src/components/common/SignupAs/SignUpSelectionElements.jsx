import styled from 'styled-components';

export const SignUpSelectionWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    background:var(--second-white);
`

export const SignUpSelectionContainer = styled.div`
    display: grid;
    grid-template-columns: 5fr 3fr;
    justify-content: center;
    /* align-items: center; */
    width: 80%;
    height: 80%;
    box-shadow: var(--box-shadow);
    border-radius: 10px;
    padding: 0 50px;
`

export const SignUpLeftContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ImageContainer = styled.img`
    height:auto;
    width:auto;
`

export const SignUpRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const SignUpRightContainerHeading = styled.h1`
    font-size: 2rem;
    font-weight: 900;
    text-transform: uppercase;
    color: var(--main-green);
`
export const SignUpButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin:1rem;
`


export const ButtonLayout = styled.button`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:1rem;
    border: 2px solid var(--main-green);
    background-color: var(--second-white);
    color: var(--main-green);
    padding: 1rem 1rem;
    font-size: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    border-radius: var(--border-radius);
    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: var(--main-green);
        color: var(--second-white);        
    }
`


export const ButtonImage = styled.img`
    height: 150px;
    width: 150px;
`