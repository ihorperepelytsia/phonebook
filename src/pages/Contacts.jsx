import React from "react";
import ContactForm from "../component/ContactForm/ContactForm";
import Filter from "../component/Filter/Filter";
import ContactList from "../component/ContactList/ContactList";

const Contacts = () => (
  <>
    <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </>
);

export default Contacts;
