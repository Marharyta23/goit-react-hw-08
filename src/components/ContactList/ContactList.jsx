import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contact}>
            <Contact item={contact} />
          </li>
        );
      })}
    </ul>
  );
}
