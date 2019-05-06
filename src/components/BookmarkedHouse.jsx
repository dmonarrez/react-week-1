import React from 'react';
import PropTypes from 'prop-types';

function Bookmarked(props) {

  function sendHouse() {
    props.removeItem({id: props.id})
    console.log(props.price);
  }

  return (
    <div>
      <div>
        <p>{props.price}</p>
        <p>{props.specs}</p>
        <p>{props.address}</p>
        <button onClick = {sendHouse}>Remove</button>
      </div>
    </div>
  );
}

Bookmarked.propTypes = {
  price: PropTypes.string,
  specs: PropTypes.string,
  address: PropTypes.string
};

export default Bookmarked;
