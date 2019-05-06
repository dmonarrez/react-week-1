import React from 'react';
import TheHouses from './HouseList';
import Bookmarked from './BookmarkedHouse';
import houses from '../model/houses.js';
import { v4 } from 'uuid';

class DisplayHouseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: [],
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(houseInfo) {
    console.log(houseInfo)
    let newState = this.state.bookmarked;
      newState.push(houseInfo);
    this.setState({bookmarked: newState})
  }

  removeItem(houseId){
    let newState = this.state.bookmarked;

    for(var i = 0; i < newState.length; i++) {
      console.log(i);
      if(newState[i].id === houseId.id) {
        newState.splice(i, 1);
      }
    }

    this.setState({bookmarked: newState})
  }

  render() {
    let added;
    if(this.state.bookmarked.length === 0) {
      added = 'none saved'
      console.log(this.state.bookmarked)

    } else {
      added = this.state.bookmarked.map((marked) =>
      <Bookmarked price={marked.price}
      specs={marked.specs}
      address={marked.address}
      id={marked.id}
      key={marked.id}
      removeItem={this.removeItem}/>
      )
    }


    return (
      <div>
        <style jsx>{`
            .houseList {
              display: flex;
              flexDirection: row;
            }

            .bookmarks {
              display: flex;
              flexDirection: row;
            }
          `}
        </style>
        <h2>Houses For Sale</h2>
        <div className = 'houseList'>
          {houses.map((house) =>
            <TheHouses price={house.price}
              specs={house.specs}
              address={house.address}
              id={house.id}
              key={house.id}
              addItem={this.addItem}/>
          )}
        </div>
        <hr/>
        <div className = 'bookmarks'>
          <h2>Bookmarked Houses</h2>
          {added}
        </div>
      </div>
    );
  }
}

export default DisplayHouseList;

//I have some questions about where I should use state in this instance whether it should
//be here or in HouseList.jsx. At this point all I want to do is be able to add/remove houses from the
//list to a new list of bookmarked houses and then let the user 'Buy' the house.
// this is the last stage of the application
