import React from 'react';
import PropTypes from 'prop-types';

function TheHouses(props) {
  return (
    <div>
      <div>
        <p>{props.price}</p>
        <p>{props.specs}</p>
        <p>{props.address}</p>
        <button>Add</button>
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
