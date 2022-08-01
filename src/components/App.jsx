import React, { Component } from "react";
import ContactsForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactList/ContactList";
import { nanoid } from "nanoid";



class App extends Component {
   state = {
     contacts: [],
    filter: '',
  }
  
  
  onFilterChange = (e) => {
  
    this.setState({ filter: e.target.value });
    
  }

  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  }
  fomSubmitHeader = (data) => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    };
    this.setState({
      contacts: [...this.state.contacts, newContact]
    });
  
    
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
        <h1>Phonebook</h1>
        <ContactsForm
          onSubmit={this.fomSubmitHeader}
          contacts={this.state.contacts}
        ></ContactsForm>
       
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
        ></Filter>
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        ></ContactsList>
      </div>
    </div>
  );
  }
}
  


export default App;