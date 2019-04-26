import React from 'react';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resultsVisible: false
    };
  }

  handleClick(){
    console.log('Hey, you clicked me! I do not have code to change my state quite yet, but I will in a moment!');
  }

  render() {
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
        <button type='submit' onClick={this.handleClick}>Search</button>
      </div>
    ); // end of return
  } //end of render
}

export default SearchForm;
