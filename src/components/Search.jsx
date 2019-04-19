import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchFrom'

function Search(props){

  return (

    <div className="hero">
    <style jsx>{`
      h1 {
        color: white;
      }

      p {
        color: white;
      }

      .hero {
        background-image: url('../../assets/img/bg-image2.jpg');
        background-position: center;
        background-size: 100%;
        height: 90vh;
      }
      //start hero container
      .hero-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }

      //start hero heading
      .hero-heading {
        text-align: center;
        margin-top: 5%;
      }

      h1 {
        font-family: "Ivar Headline", "Times New Roman", serif;
        font-size: 60px;
        font-weight: 600;
        font-size: 60px;
        line-height: 72px;
        letter-spacing: 0px;
        text-transform: none;
        margin: 0px;
      }

      p {
        font-size: 22px;
        margin: 24px 0;
      }

      input {
        width: 560px;
        height: 70px;
        border-radius: 5px;
        border-width: 0;
        padding: 22px 0px 22px 24px;
      }
    `}</style>
      <div className="hero-container">
        <div className="hero-heading">
          <h1>Reimagine home</h1>
          <p>We'll help you find a place you'll love.</p>
        </div>
        <SearchForm/>
        // <div className="hero-search-bar">
        //   <input placeholder="Enter an address, neighborhood, city, or ZIP code">
        // </div>
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

export default Search;

// edit edit
