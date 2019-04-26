import React from 'react';

class SearchControler extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resultsVisible: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({resultsVisible: true});
    console.log('resultsVisible is currently set to:' + this.state.formVisibleOnPage);
  }

  render() {
    return (
      <div>
        
      </div>
    ); // end of return
  } //end of render
}

export default SearchControler;
