// import React, { Component } from "react";
// import Input from "components/Input/Input";


// class Form extends Component {
//     state = {
//     contacts: [],
//     name: ''
//     }
//     handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({[name]: value});
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { contacts, name } = this.state;
//     this.setState({
//       contacts: [...contacts, name],
//       name: ''
//     });
//     console.log(this.state);
//   }  




//   render() {
//     return (
//         <div>
//             <h1>Contacts</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//         <Input
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//           </label>
//           
//             </form>
            
//       </div>
//     );
//   }
// }
// export default Form;