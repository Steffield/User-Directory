import React from "react";


function Search () {
  return (

    <div className="container">
      <form>
        <div className="form-inline justify-content-center">
          <input className="form-control mr-2 col-lg-6 align-items-center" type="search" placeholder="Search" aria-label="Search" style={{boxShadow:"inset 0 0 3px gray"}}/>
          <button className="btn my-2 my-sm-0" type="submit" style={{color:"#7c49d5", backgroundColor:"#e3d8f6", boxShadow:"inset 0 0 10px gray"}}><i className= "fa fa-search"></i></button>
        </div>
      </form>
    </div>

  );
}

export default Search;
