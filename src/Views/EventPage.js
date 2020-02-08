import React  from 'react';
import axios from 'axios';

//styles
import { EventWrapper, EventLeftSide, EventRightSide  } from '../Styles/eventStyles/eventPageStyles'

 class Event extends React.Component {
     constructor(props){
         super(props)
         this.state ={
             id:'',
            venue: {},
            group: {},

         }
     }

     componentDidMount(){
         axios.get('https://api.meetup.com/reactjs-dallas/events?&sign=true&photo-host=public&page=1')
         .then(response =>{
             console.log(response.data[0].id)
             let res = response.data[0]
             this.setState({
                 venue:res.venue,
                 id: res.id,
                 group: res.group,
                 date: res.local_date,
                 time: res.local_time
             })
         }).catch(err =>{
             console.log(err)
         })
     }
     render(){
         console.log(this.state)
         const {id, venue, group, date, time } = this.state;
         return(
            <EventWrapper>
                <EventLeftSide>
                    left
                </EventLeftSide>
                <EventRightSide>
                    right
                </EventRightSide>
            </EventWrapper>
         )
     }
 }

 export default Event;