import React from "react";
import "./table.css";
import axios from "axios";

export default class Table extends React.Component {
  state = {
    persons: [],
    searchTerm: ""
  }


componentDidMount(){
  axios.get("https://randomuser.me/api/?results=25&inc=picture,name,email,phone,dob")
  .then((res) => {
    console.log(res.data.results)
    this.setState({ persons: res.data.results });
  })
}

sort = ()=>{
  // sort array of objects--passa function hier
}

render(){
  return(

    <div className="container-fluid">

         <table className="table">
       <thead>
         <tr>
           <th scope="col">Image</th>
           <th scope="col" onClick={this.sort}>Name</th>
           <th scope="col">Email</th>
           <th scope="col">Phone</th>
           <th scope="col">Age</th>
         </tr>
       </thead>

       <tbody>
         
           { 
           this.state.persons.map((person, i) =>
           (
              <tr key={person.email}>
                <td><img alt={i} src={person.picture.medium}></img></td>
                <td>{person.name.first}{person.name.last}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.dob.age}</td>
              </tr> 
           ))
          }         
       </tbody>
     </table>

   </div>
  )
  }
}
   


//   )
// }

// // import axios from "axios";

// // export default class Table extends React.Component {
//   constructor () {
//     super();

//     this.state ={
//       persons :[{
//         id: '',
//         picture: '',
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone:''

//       }]
//     }
//   }
 

//   componentDidMount() {
//     axios.get(`https://randomuser.me/api/?results=25&inc=picture,name,email,phone,dob`, {
//       responseType: 'json'
//     })
//       .then(res => {
//         // const persons = res.data;
//         this.setState({ persons : res.data });
//       })
//   }

//   render() {
//     const { persons } = this.state;

//     return (<ReactTable.default
//               data={ persons }
//               columns={[
//                 {
// //                   Header: 'Picture',
// //                   columns: {
// //                     picture: d=>d.picture
// //                   }
// //                 },
// //                 {
// //                   Header: "Email",
// //                   columns: {
// //                     email: d=>d.email
// //                   }
// //                 }
// //               ]}
// //               className="-striped -highlight"
// //             />
// //     );
// //   }

// // }

// // ReactDom.render(<div><Table></div>);
// // // </div>)

// function Table(){
//   return (


//       <div className="container-fluid">

//          <table className="table">
//        <thead>
//          <tr>
//            <th scope="col">Image</th>
//            <th scope="col">Name</th>
//            <th scope="col">Email</th>
//            <th scope="col">Department</th>
//            <th scope="col">Date</th>
//          </tr>
//        </thead>
//        <tbody>
//          <tr>
//            { this.state.persons.map(person =>
//            (
//               <th scope="row">{person.id}</th>
//               <td>{person.image}</td>
//               <td>{person.firstName}{person.lastName}</td>
//               <td>{person.email}</td>
//               <td>{person.phone}</td>
//               <td>{person.dob}</td>
//            )
//            )}
//          </tr>
        
//        </tbody>
//      </table>

//    </div>
     
//     )
//   }
// }

// // // Make a request for a user with a given ID
// // axios.get('https://randomuser.me/api/?results=25&inc=picture,name,email,phone,dob')
// //   .then(function (response) {
// //     // handle success
// //     console.log(response);
// //   })
// //   .catch(function (error) {
// //     // handle error
// //     console.log(error);
// //   })
// //   // .then(function () {
// //   //   // always executed
// //   // });

// // class Table extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       error: null,
// //       isLoaded: false,
// //       employees: []
// //     };
// //   }

// //   componentDidMount() {
// //     fetch("https://randomuser.me/api/?results=25&inc=picture,name,email,phone,dob")
// //       .then(res => res.json());
// //       console.log(res);
// //   }

// // //       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             employees: result.employees
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, employees } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {employees.map(employee => (
//             <li key={employee.id}>
//               {employee.firstName} {employee.lastName}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }

// https://randomuser.me/api/?results=25&inc=picture,name,email,phone,dob


// function Table(){
//   return (
//     <div className="container-fluid">

//     <table className="table table-striped table-hover">
//       <thead>
//         <tr>
//           <th scope="col">Image</th>
//           <th scope="col">Name</th>
//           <th scope="col">Email</th>
//           <th scope="col">Department</th>
//           <th scope="col">Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th scope="row">#</th>
//           <td>Mark Jacobs</td>
//           <td>Otto@gmail.com</td>
//           <td>Sales</td>
//           <td>12/12/19</td>
//         </tr>
//         <tr>
//           <th scope="row">#</th>
//           <td>Mark Bacon</td>
//           <td>Otto@gmail.com</td>
//           <td>Sales</td>
//           <td>12/12/19</td>
//         </tr>
        
//       </tbody>
//     </table>

//   </div>
//   )
// }

// export default Table;