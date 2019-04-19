import React from 'react';

function SearchForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='search'
          placeholder='Enter an address, neightborhood, city, or ZIP code'/>
        <button type='submit'></button>
      </form>
    </div>
  );
}

export default SearchForm;
