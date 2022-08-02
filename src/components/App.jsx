import React, { Component } from "react";
import ContactsForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactList/ContactList";
import { nanoid } from "nanoid";



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
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        background: "radial-gradient(#edf1cf, #43acb4)",
        paddingTop: '50px',
        paddingBottom: '50px',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(45deg, #37ecba, #72afd3)',
          padding: '20px',
          borderRadius: '50px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
      }}>
        <h1
          style={{
            fontSize: '50px',
            color: 'rgb(41, 67, 62)',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
            borderBottom: '2px solid rgb(41, 67, 62)',
          }}>Phonebook</h1>
        <ContactsForm
          onSubmit={this.fomSubmitHeader}
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        ></ContactsForm>
       
        <h2
          style={{
            fontSize: '50px',
            color: 'rgb(41, 67, 62)',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
            borderBottom: '2px solid rgb(41, 67, 62)',
          }}
        >Contacts</h2>
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