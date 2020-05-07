import React from "react";
import "./table.css";

// const sortTypes = {
// 	up: {
// 		class: 'sort-up',
// 		fn: (a, b) => a.person.name.last - b.person.name.last
// 	},
// 	down: {
// 		class: 'sort-down',
// 		fn: (a, b) => b.person.name.last - a.person.name.last
// 	},
// 	default: {
// 		class: 'sort',
// 		fn: (a, b) => a
// 	}
// };
// sort = ()=>{
// }

function Table(props){
  return (
    <div className="container-fluid">

         <table className="table table-striped table-hover">
       <thead>
         <tr>
         {/* onClick={this.sort} */}
           <th scope="col">Image</th>
           <th scope="col" >Name</th>
           <th scope="col">Email</th>
           <th scope="col">Phone</th>
           <th scope="col">Nationality</th>
         </tr>
       </thead>

       <tbody>
         
           { props.persons.map((person, i) =>
           (
              <tr key={person.email}>
                <td id={`IMG-${i}`}><img alt={i} src={person.picture.medium}></img></td>
                <td >{person.name.first} {person.name.last}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.nat}</td>
              </tr> 
           ))
          }         
       </tbody>
     </table>

   </div>
  )
  }

// render(){
//   return(

//     <div className="container-fluid">

//          <table className="table table-striped table-hover">
//        <thead>
//          <tr>
//            <th scope="col">Image</th>
//            <th scope="col" onClick={this.sort}>Name</th>
//            <th scope="col">Email</th>
//            <th scope="col">Phone</th>
//            <th scope="col">Nationality</th>
//          </tr>
//        </thead>

//        <tbody>
         
//            { 
//            props.persons.map((person, i) =>
//            (
//               <tr key={person.id.value}>
//                 <td id={`IMG-${i}`}><img alt={i} src={person.picture.medium}></img></td>
//                 <td >{person.name.first} {person.name.last}</td>
//                 <td>{person.email}</td>
//                 <td>{person.phone}</td>
//                 <td>{person.nat}</td>
//               </tr> 
//            ))
//           }         
//        </tbody>
//      </table>

//    </div>
//   )
//   }
// }

export default Table;