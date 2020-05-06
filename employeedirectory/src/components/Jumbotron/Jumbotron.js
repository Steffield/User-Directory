import React from "react";
import Search from "../Search/Search"
import "./Jumbotron.css";

function Jumbotron() {

  return (
    <div className="jumbotron jumbotron-fluid" style={{backgroundColor: "mediumpurple", color: "white"}}>
      <div className="container text-center" >
        <h1 className="display-4">Employee Directory</h1>
       
        <p className="lead">Click on carets to sort a column or use the search box to filter your search results.</p>
      </div>
      <hr></hr>
      <Search />
    </div>

  );
}

export default Jumbotron;
