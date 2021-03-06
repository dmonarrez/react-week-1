import React from 'react';
import PropTypes from 'prop-types';

function TheHouses(props) {

  function sendHouse() {
    props.addItem({price: props.price, specs: props.specs, address: props.address, id: props.id})
  }

  return (
    <div>
      <div>
        <p>{props.price}</p>
        <p>{props.specs}</p>
        <p>{props.address}</p>
        <button onClick = {sendHouse}>Add</button>
      </div>
    </div>
  );
}

TheHouses.propTypes = {
  price: PropTypes.string,
  specs: PropTypes.string,
  address: PropTypes.string
};

export default TheHouses;
