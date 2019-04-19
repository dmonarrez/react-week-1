import React from 'react';

function SearchForm(){
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
      <input
        type='text'
        id='search'
        placeholder='Enter an address, neightborhood, city, or ZIP code'/>
      <button type='submit'></button>
    </div>
  );
}

export default SearchForm;
