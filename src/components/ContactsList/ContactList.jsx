import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { getFiltredContacts } from "../../redux/Phonebook/phone-selectors";
import actions from "../../redux/Phonebook/phone-actions";
import s from "./ContactList.module.css";

export default function ContactsList() {
  const contacts = useSelector(getFiltredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li className={s.item} key={id}>
          <Contact name={name} number={number} />
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(actions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
