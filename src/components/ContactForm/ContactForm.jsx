import React, { Component } from "react";



class ContactsForm extends Component {
    state = {
        name: "",
        number: ""
    }
   


    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.resetForm();
        this.findDuplicate();
    
    }

 
    findDuplicate = (name) => {
        const { contacts } = this.props;
        const duplicate = contacts.find(contact => contact.name === name);
        if (duplicate) {
            alert(`${name} is already in contacts`);
        }
    }





   
     resetForm = () => {
        this.setState({
            
            name: "",
            number: ""
        })
    }


    onChangeInput = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChangeInput}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        itle="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </div>
                <div>
                    <label>Number:</label>
                    <input
                        type="text"
                        name="number"
                        value={this.state.number}
                        onChange={this.onChangeInput}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </div>
                <div>
                    <button type="submit">Add contact</button>
                </div>
            </form>
        );
    }
}

export default ContactsForm;