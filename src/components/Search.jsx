import React from 'react';
import PropTypes from 'prop-types';

function Search(props){

  return (

    <div className="hero">
      <div className="hero-container">
        <div className="hero-heading">
          <h1>Reimagine home</h1>
          <p>We'll help you find a place you'll love.</p>
        </div>
        <div className="hero-search-bar">
          <input placeholder="Enter an address, neighborhood, city, or ZIP code">
        </div>
      </div>
    </div>
    // <div style={ticketStyles} className='hover-shadow' data-aos='fade-in'>
    //   <h3>{props.location} - {props.names}</h3>
    //   <p><em>{props.issue}</em></p>
    // </div>
  );
}

// Ticket.propTypes = {
//   names: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   issue: PropTypes.string
// };

export default Ticket;

// edit edit
