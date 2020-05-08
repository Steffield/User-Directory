import React from "react";

function Search (props) {
  return (

    <div className="container">
      <form>
        <div className="form-inline justify-content-center">
          <input className="form-control mr-5 align-items-center" type="search"  aria-label="Search" style={{boxShadow:"inset 0 0 3px gray"}}
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          id="search"
          placeholder="Search for an employee name"
          />

          {/* filter by Gender */}
          <label className="mr-2" for="genderSearch">Gender</label>
            <select name="genderSearch" class="form-control mr-5">
              <option selected>Choose...</option>
              <option value ={props.female}>female</option>
              <option value={props.male}>male</option>
            </select>

            {/* filter by nationality */}
            <label className="mr-2" for="natSearch">Office Location</label>
            <select name="natSearch" class="form-control mr-5">
              <option selected>Choose...</option>
              <option value ={props.us}>USA</option>
              <option value ={props.de}>Germany</option> 
              <option value ={props.nz}>New Zealand</option>
              <option value ={props.gb}>Great Britain</option>
          
            </select>
          <button className="btn my-2 my-sm-0" type="submit" style={{color:"#f0ebee", backgroundColor:"#565656", boxShadow:"inset 0 0 2px gray"}}
          onClick={props.handleFormSubmit}
          ><i className= "fa fa-search"></i></button>
        </div>
      </form>
    </div>

  );
}

export default Search;
