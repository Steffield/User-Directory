import React from "react";
import "./Jumbotron.css";

function Jumbotron({natSearch, search, handleFormSubmit, handleInputChange, handleFormClear}) {
  return (
    <div className="jumbotron" style={{backgroundColor: "#94778B", color: "white"}}>
      <div className="container text-center" >
        <h1 className="display-4">Employee Directory</h1>
       
        <p className="lead">If you prefer to contact an employee of the same gender or works in the same country, filter the result by gender or office location. Click on the caret in the name column to sort the results by the employee's last name.</p>
      </div>
      <hr></hr>
      <SearchForm 
        natSearch={natSearch} 
        search={search}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        handleFormClear={handleFormClear}
        />
       
    </div>

  );
}

function SearchForm ({search, handleInputChange, natSearch, handleFormSubmit, handleFormClear}) {
  return (

    <div className="container">
      <form className="search" 
      // onSubmit={handleFormSubmit}
      >
        <div className="form-inline justify-content-center">

          {/* employee by last name  */}
          <label htmlFor="search" className="mr-2">Search Employee</label>
          <input 
            value={search}
            onChange={handleInputChange}
            className="form-control mr-5 align-items-center" 
            type="text"  
            aria-label="Search" 
            // style={{boxShadow:"inset 0 0 3px gray"}}
            name="search"
            list="persons"
            id="search"
            placeholder="Search employee"
          />


          {/* filter by nationality */}
          <label htmlFor="natSearch" className="mr-2">Office Location</label>
          <select name="natSearch" value={natSearch} onChange={handleInputChange} className="form-control mr-5">
            <option defaultValue ="us,gb,nz,de">All Offices</option>
            <option value ="us">USA</option>
            <option value ="de">Germany</option> 
            <option value ="nz">New Zealand</option>
            <option value ="gb">Great Britain</option>
          </select>
        
          {/* Submit and Clear Button */}
          <button className="btn my-2 my-sm-0 mr-2" type="submit" name="submit" style={{color:"#565656", backgroundColor:"#f0ebee", boxShadow:"inset 0 0 5px gray"}}
            onClick={handleFormSubmit}
            >
            <i className= "fa fa-search"></i>
          </button>

          <button className="btn my-2 my-sm-0" type="reset" name="clear" style={{color:"#f0ebee", backgroundColor:"#565656", boxShadow:"inset 0 0 5px gray"}}
          onClick={handleFormClear}>
            <i className= "fa fa-undo"></i>
          </button>  
        </div>
      </form>
    </div>

  )
}

export default Jumbotron;
