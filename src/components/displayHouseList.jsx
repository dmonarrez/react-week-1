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
