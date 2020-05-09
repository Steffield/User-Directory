import axios from "axios";

const BaseURL = "https://randomuser.me/api/?results=";
const wantedResultNumber = "50" ;
const defaultQuery= "&seed=2e6577716ac2851f&inc=picture,name,email,phone,nat,id&nat=";

// Export an object with a "search" method that searches the randomuser API for the passed query
export default {
  search: function(query) {
    return axios.get(BaseURL + wantedResultNumber + defaultQuery + query );

  }
};

