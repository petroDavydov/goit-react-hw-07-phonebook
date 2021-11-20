import axios from "axios";
// дефолтний URL
axios.defaults.baseURL = "https://61962ffbaf46280017e7debe.mockapi.io";
// Запрос
export async function fetchContacts() {
  const { data } = await axios.get("/phonebook-contacts");
  return data;
}
// Добавление
export async function addContact(contact) {
  const { data } = await axios.post("/phonebook-contacts", contact);
  return data;
}
// Удаление по Id
export async function deleteContact(id) {
  await axios.delete(`/phonebook-contacts/${id}`);
  return id;
}
