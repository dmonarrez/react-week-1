import React from 'react';

function NewTicketForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
