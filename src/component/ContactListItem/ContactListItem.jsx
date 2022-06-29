import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { Oval } from 'react-loader-spinner';
import {
  Items,
  Text,
  Button,
  Div,
  NameContact,
  NumberPhone,
} from 'component/ContactList/ContactList.styled';
import { EditContact } from 'component/EditContact/EditContact';
import {
  useDeleteContactMutation,
  useChangeContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsApi';
import { firstLaterToUpperCase } from 'utils/firstLaterToUpperCase';
import { notifySuccess, notifyError, notifyInfo } from 'utils/notify';
import { formatedNumberPhoneEdit } from 'utils/formatedNumberPhone';

export const ContactListItem = ({ id, name, number, index }) => {
  const [editForm, setEditForm] = useState(false);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [changeContact, result] = useChangeContactMutation();
  const { data } = useFetchContactsQuery();

  const handleDeleteContact = async id => {
    try {
      await deleteContact(id);
      notifySuccess('Contact deleted successfully');
    } catch (error) {
      notifyError(error.message);
    }
  };
  const closeModal = e => {
    if (e.code === 'Escape') {
      setEditForm(false);
    }
    if (
      e.target.tagName === 'svg' ||
      e.target.tagName === 'path' ||
      e.target.id === 'overlay' ||
      e.target.id === 'closemodal'
    ) {
      setEditForm(false);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, []);

  const handleChangeEditForm = async e => {
    e.preventDefault();
    const nameValue = e.currentTarget.elements.name.value;
    const numberValue = formatedNumberPhoneEdit(
      e.currentTarget.elements.number.value
    );
    e.currentTarget.reset();

    try {
      if (nameValue === '' && numberValue === '') {
        notifyError('No changes');
        return;
      }
      if (data.find(el => el.name === nameValue)) {
        notifyInfo(`${nameValue} is alredy in contacts`);
        return;
      }
      if (numberValue || numberValue === '') {
        await changeContact({
          name: nameValue === '' ? name : nameValue,
          number: numberValue === '' ? number : numberValue,
          id,
        });
        setEditForm(false);
        notifySuccess('Contact change successfully');
      }
    } catch (error) {
      notifyError(error.message);
    }
  };
  return (
    <Items>
      <Text>
        <p>{index + 1}- </p>
        <NameContact> {firstLaterToUpperCase(name)}:</NameContact>
        <NumberPhone>{number}</NumberPhone>
      </Text>
      <Div>
        <Button
          onClick={() => {
            if (editForm) {
              setEditForm(false);
              return;
            }
            setEditForm(true);
          }}
        >
          <BiEdit />
        </Button>
        <Button onClick={() => handleDeleteContact(id)} disabled={isLoading}>
          {isLoading ? (
            <Oval color="#FFF" height={12} width={12} />
          ) : (
            <MdDeleteForever />
          )}
        </Button>
      </Div>
      {editForm && (
        <EditContact
          handleChangeEditForm={handleChangeEditForm}
          id={id}
          closeModal={closeModal}
          isLoading={result.isLoading}
        />
      )}
    </Items>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
