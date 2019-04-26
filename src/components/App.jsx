import React from 'react';
import ReactDOM from 'react-dom';
import TicketList from './TicketList';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';
import Home from './Home';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterHouseList: []
    }
    this.handleAddingSearchToList = this.handleAddingSearchToList.bind(this);
  }

  handleAddingSearchToList(newSearch) {
    var newMasterHouseList = this.state.masterHouseList.slice();
    newMasterHouseList.push(newSearch);
    this.setState({masterHouseList: newMasterHouseList});
  }

  componentDidMount() {
    document.title = "Zillow";
  }
  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/newticket' render={()=><SearchControler onSearch={this.handleAddingSearchToList} /> //this needs to change to the page that will display the output of the search
          <Route component={Error404}/>
        </Switch>
        <h1 style={{height: '50px'}}></h1>
      </div>
    );
  }
}

export default App;
