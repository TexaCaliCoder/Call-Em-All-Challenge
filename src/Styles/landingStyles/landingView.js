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
        width: 95%;
        align-items: center;
        margin:4%;
        .buttonComp{
            width:70%;
        }
        h1{
            text-align: center;
        }
    }
`