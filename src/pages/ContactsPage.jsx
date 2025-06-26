import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from '../components/redux//contacts/operations';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';
// import Contact from '../components/Contact/Contact';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Contacts</h2>
      {/* <Contact /> */}
      <ContactForm />
      <SearchBox />
      <ContactList onDelete={handleDeleteContact} />
    </div>
  );
};

export default ContactsPage;
