import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/Phonebook/phone-selectors";
import actions from "../../redux/Phonebook/phone-actions";
import s from "./ContactForm.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const comparableElement = contacts.some(
      (element) => element.name.toLowerCase() === name.toLowerCase()
    );
    if (comparableElement) {
      reset();
      return alert(`${name} is already in the directory`);
    }
    dispatch(actions.addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.contactFormLabel}>
        Name
        <input
          onChange={handleInputChange}
          value={name}
          className={s.inputContactForm}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.contactFormLabel}>
        Phone
        <input
          value={number}
          className={s.inputContactForm}
          onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.btnContactForm} type="submit">
        <span className={s.btnText}> Add contacts</span>
      </button>
    </form>
  );
}
