import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom'

import { Button } from '../Components/main/Button'

 const RSVP =(props) =>{
    const [going, setGoing] = useState([]);
    const [waitList, setWaitList] = useState([]);
    const [goBack, setGoBack] = useState(false)


    useEffect(() =>{
        const { id } = props.match.params

        axios.get(`https://api.meetup.com/reactjs-dallas/events/${id}/rsvps?&sign=true&photo-host=public`)
            .then(res =>{
                    const going = res.data.filter(item => item.response === 'yes')
                    const wait = res.data.filter(item => item.response === 'waitlist')
                    const guests = res.data.filter(item => item.response === 'waitlist')
                    setGoing(going)
                    setWaitList(wait)
                    console.log(res.data)
            }).catch(err=> console.log(err))
    })

    const redirectHandle = () =>{
        setGoBack(true)
    }
    
    if (goBack) {
        return <Redirect push to={'/DallasMeetup'} />;
      }

    return(
        <>
        <div style={{color:'white'}}>
           <h1> RSVP DATA: </h1>
        </div>
        <div>
            <h3> GOING: {going.length} </h3>  
        </div>
        <div>
            <h3> WAIT-LIST: {waitList.length} </h3>  
        </div>
        <div>
            <Button label='Back to Event' click={redirectHandle}/>
        </div>
        </>
    )
}
export default RSVP;