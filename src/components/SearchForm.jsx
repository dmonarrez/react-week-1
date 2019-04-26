import React from 'react';

function SearchForm(){
  let _search = null;

  function handleFormSubmission(event) {
    event.preventDefault();
    console.log(_search.value);
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
}

export default SearchForm;
