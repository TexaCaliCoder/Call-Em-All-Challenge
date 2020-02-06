import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
//Views
import  Event  from './Views/EventPage';
import  Landing  from './Views/Landing';
import  RSVP  from './Views/RSVP';



const App = () => {
  return (
    <div>
     <Route exact path='/' component={Landing} />
     <Route path='/DallasMeetup' component={Event} />
     <Route path='DallasMeetup/:id/RSVP' component={RSVP} />
    </div>
  );
}

export default App;
