import React from 'react';
import ReactDOM from 'react-dom';
import DisplayHouseList from './DisplayHouseList';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from './Home';

class App extends React.Component {

  componentDidMount() {
    document.title = "Zillow";
  }

  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Buy' component={DisplayHouseList} />
          <Route component={Error404}/>
        </Switch>
        <h1 style={{height: '50px'}}></h1>
      </div>
    );
  }
}

export default App;
