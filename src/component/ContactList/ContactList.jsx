import React from 'react';
import { useSelector } from 'react-redux';
import { Oval } from 'react-loader-spinner';
import { List, Spinner } from './ContactList.styled';
import { useFetchContactsQuery } from 'redux/contacts/contactsApi';
import { ContactListItem } from 'component/ContactListItem/ContactListItem';

export const ContactList = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const filter = useSelector(state => state.contacts.filter);

  const contacts = () => {
    const contact = data;
    const normalizedFilter = filter.toLowerCase();

    return contact.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {isFetching && (
        <Spinner>
          <Oval height={80} width={80} />
        </Spinner>
      )}
      <List>
        {data &&
          (contacts().length === 0 ? (
            <p>No contact :( </p>
          ) : (
            contacts().map(({ id, name, number }, index) => (
              <ContactListItem
                key={id}
                id={id}
                name={name}
                number={number}
                x
                index={index}
              />
            ))
          ))}
      </List>
    </>
  );
};
