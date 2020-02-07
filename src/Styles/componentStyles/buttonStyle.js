import styled from 'styled-components';



export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: ${props => props.width ? props.width : '10vw' };
    height: ${props => props.height? props.height : '4.5vh'};
    background-color: teal; /* color tbd */
    border-radius: 10px;
    user-select:none;
    transition: all .1s ease-in-out;
    p{
        font-family: Prompt;
    }

    &:hover{
        background-color:#3f5f73;
    }

    &:active{
        transform: scale(.95)
    
    }
`