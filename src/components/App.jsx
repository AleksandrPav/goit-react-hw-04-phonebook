import React, { Component } from "react";
import { nanoid } from 'nanoid'




class App extends Component {
   state = {
     contacts: [],
     name: ''
  }
  
  onSubmitForm = (e) => {
    e.preventDefault();
    const { contacts, name } = this.state;
    this.setState(prevState => ({
      contacts: [...prevState.contacts, name],
      id: nanoid(),
      name: ''
    }));
  
    console.log(contacts);
  }

    onChangeInput = (e) => {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value });
    }
  


  
  render() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>
        <form onSubmit={this.onSubmitForm}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChangeInput}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <ul>
          {this.state.contacts.map(contact => (
            <li  key={nanoid()}>{contact}</li>
          ))}
        </ul>
        
    

    
      </div>
    </div>
  );
  }
}
  


export default App;