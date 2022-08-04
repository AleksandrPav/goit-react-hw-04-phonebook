import React, { Component } from "react";
import ContactsForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactList/ContactList";
import { nanoid } from "nanoid";
import css from "./App.module.css";



class App extends Component {
   state = {
     contacts: [
       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
     ],
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
    <div className={css.container}>
      <div className={css.header}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactsForm
          onSubmit={this.fomSubmitHeader}
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
       
        <h2 className={css.title}>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
       />
      </div>
    </div>
  );
  }
}
  


export default App;