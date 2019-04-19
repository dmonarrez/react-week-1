import React from 'react';

function SearchForm(){
  return (
    <div>
      <style jsx>{`
        input {
          width: 560px;
          height: 70px;
          borderRadius: 5px;
          borderWidth: 0;
          padding: 22px 0px 22px 24px;
        }
      `}</style>
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
