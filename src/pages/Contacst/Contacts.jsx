import React, { useEffect } from 'react';
import { ContactForm } from 'component/ContactForm/ContactForm';
import { Filter } from 'component/Filter/Filter';
import { ContactList } from 'component/ContactList/ContactList';
import { Container, Text } from 'pages/AuthNav/AuthNav.styled';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
export const Contacts = () => {
  const { refetch } = useFetchContactsQuery();
  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <ContactForm />
      <Container>
        <Text>Contacts</Text>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};
