import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactsComponent from '../pure/forms/contact/contacts';
// import { Contact } from './contact.class';
// import ContactsComponent from './contacts';

const ContactList = () => {

// const defaultContact = new Contact('Levi', 'Garcia', "garcius88617@gmail.com",  true)
const defaultContact = new Contact('Levi', 'Garcia', "garcius88617@gmail.com",  true)
    return (
        <div>

        <div>
            <h1> CONTACT:</h1> 
        </div>
                {/* <ContactsComponent contact = {defaultContact} ></ContactsComponent> */}
                <ContactsComponent contact={defaultContact} ></ContactsComponent>
        </div>
        
    );
}

export default ContactList;
