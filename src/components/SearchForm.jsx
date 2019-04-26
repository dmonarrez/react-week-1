import React from 'react';

function SearchForm(){
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          id='search'
          placeholder='Enter an address, neightborhood, city, or ZIP code'/>
          <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
