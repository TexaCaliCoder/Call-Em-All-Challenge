import styled from 'styled-components'

export const LandingWrapper = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    margin-left: 10%;
    h1{
        color: white;
        font-family:Righteous;
    }
    @media(max-width: 900px){
        .buttonComp{
            width:70%;
        }
    }
`