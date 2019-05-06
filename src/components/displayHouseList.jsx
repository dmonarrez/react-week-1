import React from 'react';
import TheHouses from './HouseList';
import houses from '../model/houses.js';

function DisplayHouseList(){
  return (
    <div>
      <style jsx>{`
          .houseList {
            display: flex;
            flexDirection: row;
            flexWrap: wrap;
            justifyContent: space-between;
          }
        `}
      </style>
      <h2>Houses For Sale</h2>
      <div className = 'houseList'>
        {houses.map((house, index) =>
          <TheHouses price={house.price}
            specs={house.specs}
            address={house.address}
            key={index}/>
        )}
      </div>
      <hr/>
    </div>
  );
}

export default DisplayHouseList;

//I have some questions about where I should use state in this instance whether it should
//be here or in HouseList.jsx. At this point all I want to do is be able to add/remove houses from the
//list to a new list of bookmarked houses and then let the user 'Buy' the house.
// this is the last stage of the application 
