import React from 'react';
import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';
import { Oval } from 'react-loader-spinner';
import { Overlay, Modal, CloseModal } from './EditContact.styled';
import { Container, Text } from 'pages/AuthNav/AuthNav.styled';
import { Form, Input, Button, Label, Div } from 'pages/Login/Login.styled';

export const EditContact = ({
  handleChangeEditForm,
  id,
  closeModal,
  isLoading,
}) => {
  return (
    <Overlay onClick={closeModal} id="overlay">
      <Modal>
        <CloseModal id="closemodal">
          <IoMdClose />
        </CloseModal>
        <Container>
          <Text>Edit contact</Text>
          <Form onSubmit={handleChangeEditForm}>
            <Div>
              <Label>
                Name
                <Input name="name" placeholder="name" />
              </Label>
              <Label>
                Number
                <Input name="number" placeholder="number" />
              </Label>
              <Button name={id} type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Oval color="#FFF" height={12} width={12} />
                ) : (
                  'Save edit'
                )}
              </Button>
            </Div>
          </Form>
        </Container>
      </Modal>
    </Overlay>
  );
};
EditContact.propTypes = {
  handleChangeEditForm: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
