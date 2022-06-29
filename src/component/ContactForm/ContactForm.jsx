import React from 'react';
import { Oval } from 'react-loader-spinner';
import { Label, Input, Button, Form, Div } from './ContactForm.styled';
import { Container, Text } from 'pages/AuthNav/AuthNav.styled';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsApi';
import { notifySuccess, notifyError, notifyInfo } from 'utils/notify';
import { formatedNumberPhone } from 'utils/formatedNumberPhone';

export const ContactForm = () => {
  const [createContact, { isLoading }] = useAddContactMutation();
  const { data } = useFetchContactsQuery();

  const addContact = async e => {
    e.preventDefault();
    const nameValue = e.currentTarget.elements.name.value;
    const numberValue = formatedNumberPhone(
      e.currentTarget.elements.number.value
    );
    e.currentTarget.reset();

    try {
      if (data.find(el => el.name === nameValue)) {
        notifyInfo(`${nameValue} is alredy in contacts`);
        return;
      }
      if (numberValue) {
        await createContact({ name: nameValue, number: numberValue });

        notifySuccess('Contact added successfully');
      }
    } catch (error) {
      notifyError(error.message);
    }
  };

  return (
    <Container>
      <Text>Add contact</Text>
      <Form onSubmit={addContact}>
        <Div>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
        </Div>
        <Button disabled={isLoading}>
          {isLoading ? <Oval color="#FFF" height={12} width={12} /> : 'Add '}
        </Button>
      </Form>
    </Container>
  );
};
