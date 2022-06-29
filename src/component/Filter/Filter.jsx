import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onChangeFilterStore } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/contactsSelectors';
import { Label, Input } from 'component/ContactForm/ContactForm.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = ({ target: { value } }) => {
    dispatch(onChangeFilterStore(value));
  };
  return (
    <Label>
      Find Contacts by Name
      <Input name="filter" onChange={onChangeFilter} value={filter} />
    </Label>
  );
};
