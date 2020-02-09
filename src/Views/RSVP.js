import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

import { Button } from '../Components/main/Button'

 class RSVP extends React.Component{
    constructor(props){
        super(props)
        this.state={
            going: [],
            waitlist: [], 
            redirect:false
        }

        this.redirectHandle = () =>{
            this.setState({redirect:true})
        }
    }


    componentDidMount(){
        const { id } = this.props.match.params

        axios.get(`https://api.meetup.com/reactjs-dallas/events/${id}/rsvps?&sign=true&photo-host=public`)
            .then(res =>{
                    const going = res.data.filter(item => item.response === 'yes')
                    const wait = res.data.filter(item => item.response === 'waitlist')
                    this.setState({going: going, waitlist: wait})
                    console.log(res.data)
            }).catch(err=> console.log(err))
    }

    

    render(){
        const {waitlist, going, redirect} = this.state;

        if (redirect) {
            return <Redirect exact to='/DallasMeetup' />;
          }
    return(
       <>
       <div>
           <h1> RSVP DATA: </h1>
        </div>
        <div>
            <h3> GOING: {going.length} </h3>  
        </div>
        <div>
            <h3> WAIT-LIST: {waitlist.length} </h3>  
        </div>
        <div>
            <Button label='Back to Event' click={this.redirectHandle}/>
        </div>
        </>
    )}
}
export default RSVP;