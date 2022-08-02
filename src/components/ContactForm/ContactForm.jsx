import React, { Component } from "react";
import css from "./ContactsForm.module.css";



class ContactsForm extends Component {
    state = {
        name: "",
        number: ""
    }
   
    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.findDuble();
        this.resetForm();
    }

    findDuble = () => {
       if (this.props.contacts.find(contact => contact.name === this.state.name && contact.number === this.state.number)) {
           alert(`${this.state.name} is already exists`);
           this.props.deleteContact(this.state.name);
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
            <div className={css.form__contact}>
            <form onSubmit={this.onSubmitForm}>
                <div className={css.form__item}>
                    <label className={css.form__label}>Name:</label>
                        <input
                        className={css.form__input}
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChangeInput}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        itle="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </div>
                <div className={css.form__item}>
                    <label className={css.form__label}>Number:</label>
                        <input
                        className={css.form__input}
                        type="text"
                        name="number"
                        value={this.state.number}
                        onChange={this.onChangeInput}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </div>
               
                    <button className={css.form__btnAdd} type="submit">Add contact</button>
               
                </form>
            </div>
        );
    }
}

export default ContactsForm;