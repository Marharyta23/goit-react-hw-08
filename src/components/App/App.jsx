import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectError,
  selectContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import { ThreeDots } from "react-loader-spinner";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loader && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="rgb(34, 34, 192)"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {contacts.length > 0 && <ContactList />}
      {error && <b>Unknown error. Try to reload the page.</b>}
    </div>
  );
}
