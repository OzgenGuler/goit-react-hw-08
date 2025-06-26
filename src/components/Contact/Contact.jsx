import React from 'react';
// import { useDispatch } from "react-redux";

const Contact = ({ contact: { name, number }, onDelete }) => {
  // const dispatch = useDispatch();
  // const Contact = ({ id, name, number, handleContactDelete }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <p>👤 {name}</p>
        <p>📞 {number}</p>
      </div>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
      {/* <div>
        <p>
          <strong>👤{name}</strong>
        </p>
        <p>📞 {number}</p>
      </div>
      <button onClick={() => handleDeleteContact(id, name, number)}>
        Delete
      </button> */}
    </div>
  );
};

export default Contact;
