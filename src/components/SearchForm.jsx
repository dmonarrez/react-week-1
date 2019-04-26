import React from 'react';
import PropTypes from 'prop-types';

function SearchForm(props) {
  let _search = null;

  function handleFormSubmission(event) {
    event.preventDefault();
    console.log(_search.value);
    props.onSearch({newSearch: _search.value})
    _search.value = '';
  }

  return (
    <div>
    <style jsx>{`
      input {
        width: 560px;
        height: 40;
        borderRadius: 15;
        borderWidth: 0;
        padding: 22px 0px 22px 24px;
      }

      button {
        height: 40;
        width: 40;
      }
    `}</style>
      <form onSubmit={handleFormSubmission}>
        <input
          type='text'
          id='search'
          placeholder='Enter an address, neightborhood, city, or ZIP code'
          ref={(input) => {_search = input;}}/>
          <button type='submit'>Search</button>
      </form>
    </div>
  );

  SearchForm.propTypes = {
    onSearch: PropTypes.func
  }
}

export default SearchForm;
