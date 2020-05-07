import React from "react";
import Search from "../Search/Search"
import "./Jumbotron.css";

function Jumbotron(props) {

  return (
    <div className="jumbotron jumbotron-fluid" style={{backgroundColor: "#94778B", color: "white"}}>
      <div className="container text-center" >
        <h1 className="display-4">Employee Directory</h1>
       
        <p className="lead">If you prefer to speak to an employee of the same gender or the same nationality, filter the result by gender or nationality. Click on the caret in the name column to sort the results by the employee's last name.</p>
      </div>
      <hr></hr>
      <Search />
            {/* {
              natSearch={natSearch}
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
 
            //  {/* <Search
          // inputGender={props.inputGender}
          // inputNat={props.inputNat}
          // handleFormSubmit={props.handleFormSubmit}
          // handleInputChange={props.handleInputChange}
        } */}
    </div>

  );
}

export default Jumbotron;
