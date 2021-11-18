import Container from "../container/Container";
import Form from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactsList";
import s from "./App.module.css";

function App() {
  return (
    <Container>
      <h1 className={s.titlePhone}>Phonebook</h1>
      <Form />
      <Filter />
      <h2 className={s.contactTitle}>Contacts</h2>
      <ContactList />
    </Container>
  );
}

export default App;
