import React from "react";


function Search () {
  return (

    <div className="container ">
      <form>
        <div className="form-inline justify-content-center">
          <input className="form-control mr-2 col-lg-6 align-items-center" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className= "fa fa-search"></i></button>
        </div>
      </form>
    </div>

  );
}

export default Search;
