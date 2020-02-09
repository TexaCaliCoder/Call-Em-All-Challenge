import styled from "styled-components";

export const EventWrapper = styled.div`
    display: flex;
    justify-content: center;
    min-height:100%;
    height: auto;
    @media (max-width: 900px){
        flex-direction: column;
        align-items:center;
    }
`;

export const EventLeftSide = styled.div`
	color: white;
	width: 60%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin-top: 4%;
    @media (max-width: 900px){
     width: 90%;
    }
    h1{
        font-family: Righteous;
        letter-spacing:3px;
    }

    .topLeft{
        align-self:center;
        @media(max-width:900px){
               text-align: center;
           }
    }
    .deets{
        h3{
            font-family:Righteous;
            letter-spacing:2px;
        }
    }
    .textDesc{
        height: 60vh;
        overflow: auto;
   
      
        p{
            font-family:Prompt;
            padding: 2px 2px 2px 20px;
        }
        a{
            color:teal;
        }
  
    }

`;

export const EventRightSide = styled.div`
    display: flex;
    flex-direction: column;
	color: white;
    width: 25%;
    height: 90%;
    margin-left: 2%;
    margin-top:4%;
    @media (max-width: 900px){
     width: 90%;
     align-items: center;
     .rightButton{
         width:100%;
         margin-bottom: 4%;
     }
     .buttonComp{
         width: 100%;
     }
    }
    .map{
        height:auto;
        width:100%
    }
    
    .topRight{
       display:flex;
       justify-content: center; 
       h3{
           font-family:Righteous;
           letter-spacing: 4px;
          
       }
    }
     .bottomRight{
        display:flex;
        justify-content:center;
        p{
            font-family:Prompt;
            margin-top: 0;
        }
    }
    .rightButton{
        margin-top: 15%;
    }
`;
