import axios from "axios";
// дефолтний URL
axios.defaults.baseURL = "https://61962ffbaf46280017e7debe.mockapi.io/phonebook-contacts";
// Запрос
export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}
// Добавление
export async function addContact(contact) {
  const { data } = await axios.post("/contacts", contact);
  return data;
}
// Удаление по Id
export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}
