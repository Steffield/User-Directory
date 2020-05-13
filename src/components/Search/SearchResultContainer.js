import React from "react";
// import Search from "./SearchForm";
// import Filter from "../Search/Filter";
import Jumbotron from "../Jumbotron/Jumbotron";
import Table from "../Table/Table";
import API from "../../utils/API";

class SearchResultContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: "",
      natSearch: "us,nz,gb,de",
      persons: [],
      filteredPeople: []
    };


  }

  // When this component mounts, search the randomuser API for employees
  componentDidMount() {
    this.searchEmployeesNat("us,nz,gb,de"); 
  }

  searchEmployeesNat = query => {
    API.search(query)
    
      .then(res => this.setState({ persons: res.data.results }))
      .catch(err => console.log(err));  
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  // When the form is submitted, search the Employees API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployeesNat(this.state.natSearch)
 
}

  handleFormClear = () => {
    console.log(this.state.natSearch)
    this.setState({
      natSearch: "us,nz,de,gb",
      search :""
    })

  }

  render() {
    const cleanSearchVal = this.state.search.trim().toLowerCase();
    const filteredPeople = cleanSearchVal ? this.state.persons.filter(p => {
      const userData = `${p.name.first}${p.name.last}}`.toLowerCase();
      return userData.includes(cleanSearchVal);
    }) : this.state.persons;
  
    return (
      <div>
        <Jumbotron natSearch={this.state.natSearch} search={this.state.search} handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange} handleFormClear={this.handleFormClear} />
        <Table 
          persons={filteredPeople}
          />
    
      </div>
    );
  }
}

export default SearchResultContainer;
