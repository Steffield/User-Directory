import React from "react";
// import Search from "./Search";

import Table from "../Table/Table";
import API from "../../utils/API";

class SearchResultContainer extends React.Component {
  state = {
    natSearch: "",
    persons: []
  };

  // When this component mounts, search the randomuser API for employees
  componentDidMount() {
    this.searchEmployees("us,gb,de,nz"); 
    // , "&gender=female"
  }

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ persons: res.data.results }))
      .catch(err => console.log(err));

      
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Employees API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.natSearch);
  };

  render() {
    return (
      <div>
       
        <Table persons={this.state.persons} />
      </div>
    );
  }
}

export default SearchResultContainer;
