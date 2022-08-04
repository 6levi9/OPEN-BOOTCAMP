import React from 'react';
// import { Contact } from './contact.class';

const ContactsComponent = ({contact}) => {
    return (
        <div>
      <h2> Nombre:  {contact.name} </h2>
      <h2> lastName: {contact.lastName} </h2>      
      <h3> Email: {contact.email} </h3>
      <h4> The contact is : {contact.conect? "Contacto En Línea":"Contacto No Disponible"} </h4>

        </div>
    );
}

export default ContactsComponent;
