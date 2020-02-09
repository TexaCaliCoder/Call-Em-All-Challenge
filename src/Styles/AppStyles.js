import styled from 'styled-components';
import background from '../Images/background.jpg'

export const AppWrapper = styled.div`
    background: url(${background}) no-repeat center center;
    background-size: cover;
    position: fixed;
    height: 100%;
    width: 100%; 
    overflow: auto;
    @media(max-height: 900){
        position: static;
        height: auto;
        min-height:100%
    }
`