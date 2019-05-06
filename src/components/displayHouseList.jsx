import React from 'react';
import Ticket from './Ticket';
import houses from '../model/houses.js';

function displayHouseList(){
  return (
    <div>
      <hr/>
      {houses.map((ticket, index) =>
        <houses names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default HouseList;
