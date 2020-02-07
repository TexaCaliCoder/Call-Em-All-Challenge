import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//Styles
import { AppWrapper } from './Styles/AppStyles';

//Views
import  Event  from './Views/EventPage';
import  Landing  from './Views/Landing';
import  RSVP  from './Views/RSVP';



const App = () => {
  return (
    <AppWrapper>
     <Route exact path='/' component={Landing} />
     <Route path='/DallasMeetup' component={Event} />
     <Route path='DallasMeetup/:id/RSVP' component={RSVP} />
    </AppWrapper>
  );
}

export default App;
