import React  from 'react';
import axios from 'axios';

 class Event extends React.Component {
     constructor(props){
         super(props)
         this.state ={

         }
     }

     componentDidMount(){
         axios.get('https://api.meetup.com/reactjs-dallas/events?&sign=true&photo-host=public&page=1')
         .then(response =>{
             console.log(response)
         }).catch(err =>{
             console.log(err)
         })
     }
     render(){
         return(
            <>
            </>
         )
     }
 }

 export default Event;