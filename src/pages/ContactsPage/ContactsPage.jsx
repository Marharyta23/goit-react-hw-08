import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectError,
  selectContacts,
  selectLoading,
} from "../../redux/contacts/slice";
import DocumentTitle from "../../components/DocumentTitle";
import Loader from "../../components/Loader";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <DocumentTitle>Your Contacts</DocumentTitle>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loader && <Loader />}
      {contacts.length > 0 && <ContactList />}
      {error && <b>Unknown error. Try to reload the page.</b>}
    </div>
  );
}
