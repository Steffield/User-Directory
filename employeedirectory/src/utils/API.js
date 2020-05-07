import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=";
const wantedResultNumber = "25" ;
const defaultQuery= "&seed=abcde&inc=picture,name,email,phone,nat,id&nat=";
// const sameEmployees = "&seed=2e6577716ac2851f"
// const natQuery = {this.state.natQuery}
// const gender = () =>{
//   if ()
// }
// Export an object with a "search" method that searches the randomuser API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + wantedResultNumber + defaultQuery + query );

  }
};
