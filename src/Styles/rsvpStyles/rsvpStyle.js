import styled from 'styled-components';

export const RsvpWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color:white;
        font-family: Righteous;
    }
    h3{
        color:white;
        font-family: Prompt;
    }
    .buttonWrapper{
        margin-top: 2%
    }
    @media(max-width:900px){
        .buttonWrapper{
            width: 50%
        }
        .buttonComp{
            width:100%;
            height: 100%;
        }
    }
`