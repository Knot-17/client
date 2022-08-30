import styled from 'styled-components'


export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 6fr;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    background-color: var(--second-white);

`

export const ContentContainer = styled.div`
    display:flex;
    flex-direction : column ;
    align-items:center;
    width:100%;
    height:100vh;
    background-color: var(--second-white);
`

export const ProfileContainer = styled.div`
    display:flex;
    flex-direction : column ;
    width:100%;
    min-height:100vh;
    padding-left: 20px;
    background-color: var(--main-green);
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

