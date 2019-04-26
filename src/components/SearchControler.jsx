import React from 'react';
import PropTypes from "prop-types";


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

  render(){
    let currentlyVisibleContent = null;
    if (this.state.resultsVisible){
      currentlyVisibleContent = <SearchForm onSearch={this.props.onSearch}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions />; //should be the page that shows the search results
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

SearchControler.propTypes = {
  onSearch: PropTypes.func
};

export default SearchControler;
