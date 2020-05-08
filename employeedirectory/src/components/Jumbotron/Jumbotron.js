import React from "react";
import Search from "../Search/Search"
import "./Jumbotron.css";

function Jumbotron(props) {

  return (
    <div className="jumbotron" style={{backgroundColor: "#94778B", color: "white"}}>
      <div className="container text-center" >
        <h1 className="display-4">Employee Directory</h1>
       
        <p className="lead">If you prefer to contact an employee of the same gender or works in the same country, filter the result by gender or office location. Click on the caret in the name column to sort the results by the employee's last name.</p>
      </div>
      <hr></hr>
      <Search
          
              natSearch={props.natSearch}
              genderSearch={props.genderSearch}
              handleFormSubmit={props.handleFormSubmit}
              handleInputChange={props.handleInputChange}
 
        />
    </div>

  );
}

export default Jumbotron;
