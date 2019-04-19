import React from 'react';
import TicketList from './TicketList';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';
import Home from './Home';

function App(){
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/newticket' component={NewTicketForm} />
        <Route component={Error404}/>
      </Switch>
      <h1 style={{height: '50px'}}></h1>
    </div>
  );
}

export default App;
