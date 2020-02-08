import React  from 'react';
import axios from 'axios';

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
         return(
            <div>
            EVENT
            </div>
         )
     }
 }

 export default Event;