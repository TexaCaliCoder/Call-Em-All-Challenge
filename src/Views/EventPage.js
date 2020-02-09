import React  from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import { Scrollbars } from 'react-custom-scrollbars';

//styles
import { EventWrapper, EventLeftSide, EventRightSide  } from '../Styles/eventStyles/eventPageStyles'

//components 
import Map from '../Components/eventComponents/Map';
import { Button } from '../Components/main/Button';

 class Event extends React.Component {
     constructor(props){
         super(props)
         this.state ={
             id:'',
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
                 time: res.local_time,
                 desc: res.description
             })
         }).catch(err =>{
             console.log(err)
         })
     }
     render(){
         console.log(this.state)
         const {id, venue, group, date, time, desc } = this.state;
         return(
            <EventWrapper>
                <EventLeftSide>
                    <div className='topLeft'>   
                        <h1> NEXT {group.name} MEETUP</h1>
                    </div>
                    <div>
                        <h5>When:{time}</h5>
                        <h5>Where:</h5>
                    </div>
                    <div className='textDesc'>
                        <Scrollbars>
                            {parse(`${desc}`)}
                        </Scrollbars>
                    </div>
                </EventLeftSide>
                <EventRightSide>
                    <div className='topRight'>
                        {venue?<h3>{venue.name}</h3>:null}
                    </div>
                    <div className='map'>
                    {venue ? <Map lat={venue.lat} lng={venue.lon} />: null}
                    </div>
                    <div className='bottomRight'>
                        <p>For more detailed information click the marker on the map</p>
                    </div>
                    <div className='rightButton'>
                        <Button label='RSVP DETAILS' width='100%' height='60px' click={()=>console.log('click')}/>
                    </div>
                </EventRightSide>
            </EventWrapper>
         )
     }
 }

 export default Event;