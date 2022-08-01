import React from "react";

const ContactsList = ({ contacts, filter, deleteContact }) => {
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <ul>
        {filteredContacts.map(contact => (
            <li key={contact.id}>
            <p>{contact.name}: {contact.number}</p>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
        ))}
        </ul>
    );
}





export default ContactsList;