import React from "react";
import "./table.css";


const sortTypes = {
  up: {
    className: 'sort-up',
    fn: (a, b) => a.name.last > b.name.last ? 1: -1
  },
  down: {
    className: 'sort-down',
    fn: (a, b) => a.name.last < b.name.last ? 1: -1
  },
  default: {
    className: 'sort',
    fn: (a, b) => a
  }
};
class Table extends React.Component {
  state ={
    currentSort: 'default'
  }; 

  // table sort credit to https://www.florin-pop.com/blog/2019/07/sort-table-data-with-react/
onSortChange = () => {
  const { currentSort } = this.state;
  let nextSort;

  if ( currentSort === "down" ) nextSort = "up";
  else if (currentSort === 'up') nextSort = 'default';
  else if (currentSort === 'default') nextSort = 'down';

  this.setState({
    currentSort: nextSort
  });
};



render() {
  

  const { persons } = this.props;
  const { currentSort } = this.state;

  return (
    persons.length > 0 && (
      <div className="container-fluid">
         <table className="table table-striped table-hover text-left">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">First Name</th>
              <th scope="col"> Last Name
                <button className="btn btn-default ml-2" onClick={this.onSortChange}>
                  <i className={`fa fa-${sortTypes[currentSort].className}`} />
                </button>
                </th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Office Location</th>
            
            </tr>
          </thead>

          <tbody>
         
           { [...persons].sort(sortTypes[currentSort].fn).map((person, i) =>
           (
              <tr key={person.email}>
                <td id={`IMG-${i}`}><img alt={i} src={person.picture.medium}></img></td>
                <td>{person.name.first}</td>
                <td>{person.name.last}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.nat} Office</td>
              </tr> 
           ))
          }         
          </tbody>
        </table>
        </div>
     ));
    }
}

export default Table;
   