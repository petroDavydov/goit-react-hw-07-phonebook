import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  contactsOperations,
  contactsSelectors,
} from "../../redux/Phonebook/index";
import s from "./ContactList.module.css";

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li className={s.item} key={id}>
          {name}:{number}
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
