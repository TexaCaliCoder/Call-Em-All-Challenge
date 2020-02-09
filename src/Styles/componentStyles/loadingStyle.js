import styled, { keyframes }from 'styled-components';


const colorfade = keyframes `
0% {background-color:RGBA(72,92,102,0.51)}
50%  {background-color: #3D474A}
100% {background-color: RGBA(72,92,102,0.51)}
`
const ellipsis = keyframes`

    25% { content: " . "}
    50% { content: " . ."}
    75% { content: " . . ."}

`;

export const LoadingWrapper = styled.div`
width: 100%;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
`

export const LoadingBox = styled.div`
background: #3D474A;
height: 10%;
width: 15%;
color: white;
margin: 40px auto;
display: flex;
justify-content: center;
align-items: center;
animation: ${colorfade} 2s ease-in infinite;

h4{
    &::after {
      content: ' ';
      position: absolute;
      right: 2;
      animation: ${ellipsis} 2s linear infinite;
    }
}

@media(max-width:900px){
  width:60%;
}
`