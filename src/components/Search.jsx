import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import bgImage3 from '../assets/images/bgImage3.jpg';

function Search(props){

  return (

    <div className="hero">
    <style jsx>{`
      h1 {
        color: black;
      }

      p {
        color: black;
      }

      .hero {
        background-image: 'url(${bgImage3})';
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

    `}</style>
      <div className="hero-container">
        <div className="hero-heading">
          <h1>Reimagine home</h1>
          <p>We'll help you find a place you'll love.</p>
        </div>
        <SearchForm/>

      </div>
    </div>

  );
}

// Ticket.propTypes = {
//   query: PropTypes.string
// };

export default Search;
