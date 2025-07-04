import React from 'react';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

// import { selectContacts } from '../redux/contacts/selectors';
import { selectFilteredContacts } from '../redux/contacts/selectors';
// import { selectNameFilter } from '../redux/filters/slice';
// import { nanoid } from "nanoid";

const ContactList = ({ onDelete }) => {
  const filteredContacts = useSelector(selectFilteredContacts);
  // const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);

  // const ContactList = ({ onDelete }) => {
  //   const filteredContacts = useSelector(selectFilteredContacts);

  // const normalizedFilter = filter.toLowerCase();
  // // // const filteredContacts = contacts.filter(
  //   contact =>
  //     typeof contact.name === 'string' &&
  //     contact.name.toLowerCase().includes(normalizedFilter),
  // // );
  // console.log('onDelete gelen props:', onDeleteContact);

  return (
    <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact
            contact={contact}
            onDelete={() => onDelete(contact.id)}
            style={{
              marginBottom: '10px',
              border: '1px solid #ccc',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* <span>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            onClick={() => onDeleteContact(contact.id)}
            style={{
              backgroundColor: '#ff4d4d',
              color: '#fff',
              border: 'none',
              padding: '5px 10px',
              cursor: 'pointer',
            }}
          >
            Delete
          </button> */}
          </Contact>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
