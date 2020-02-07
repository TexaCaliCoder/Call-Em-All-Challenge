import React from 'react'

//styles 
import { ButtonWrapper } from '../../Styles/componentStyles/buttonStyle';


export const Button = props =>{
    const { click, label, height, width} = props
    return(
        <ButtonWrapper onClick={click} height={height} width={width} >
            <p>{label}</p>
        </ButtonWrapper>
    )
}