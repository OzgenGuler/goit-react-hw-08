// import { nanoid } from "nanoid";
import './App.css';
import CSS from './App.module.css';

// import ContactForm from './components/ContactForm/ContactForm';
// import SearchBox from './components/SearchBox/SearchBox';
// import ContactList from './components/ContactList/ContactList';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { selectContacts } from './components/redux/contacts/slice';
// import {
//   addContact,
//   deleteContact,
// fetchContacts,
// } from './components/redux/contacts/slice';
// import {
// changeFilter,
// selectNameFilter,
// } from './components/redux/filters/slice';
import { Route, Routes } from 'react-dom/client';
import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import Registration from './pages/RegistrationPage';
import Contacts from './pages/ContactsPage';
import { refreshUser } from './components/redux/auth/operations';
import { selectIsRefreshing } from './components/redux/auth/selectors';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

function App() {
  //   const contacts = useSelector(selectContacts);
  //   const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // const handleAddContact = ({ name, number }) => {
  //   const exists = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase(),
  //   );
  //   if (exists) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   dispatch(addContact({ name, number }));
  // };

  // const handleDeleteContact = contact => {
  //   dispatch(deleteContact(contact));
  // };

  // const handleFilterChange = e => {
  //   dispatch(changeFilter(e.target.value));
  // };

  // const filteredContacts = contacts.filter(
  //   (contact) =>
  //     typeof contact.name === "string" &&
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  // // console.log(contacts);

  return isRefreshing ? (
    <div className={CSS.App}>
      <h1>Phonebook</h1>
      {/* <ContactForm onAddContact={handleAddContact} /> */}
      {/* <SearchBox value={filter} onChange={handleFilterChange} /> */}
      {/* <ContactList onDelete={handleDeleteContact} /> */}
      {/* <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} /> */}
      {isRefreshing && <p>Refreshing user ..</p>}
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<Registration />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
