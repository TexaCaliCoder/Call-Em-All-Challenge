import React, { useState } from 'react';
import { Button } from '../Components/main/Button'
import { Redirect } from 'react-router'

//Styles
import { LandingWrapper } from '../Styles/landingStyles/landingView';

const Landing = props =>{
    const [redirect, setRedirect] = useState(false)

    
    return(
        <>
        {redirect?
        //eslint-disable-next-line
        <Redirect push to={'/DallasMeetup'} />:
        <LandingWrapper> 
            <h1 style={{fontSize: '3.6em'}}>
                Welcome to my assessment!
            </h1>
            <Button click={ () => setRedirect(true) }  label='CHECK OUT WHATS NEXT' height='10vh' width='25%' />
        </LandingWrapper>}
        </>
    )
}

export default Landing;