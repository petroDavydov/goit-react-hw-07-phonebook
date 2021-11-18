import { v4 as uuidv4 } from "uuid";

import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/Add", ({ name, number }) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

const deleteContact = createAction("contacts/Delete");

const changeFilter = createAction("contacts/changeFilter");

const actions = { addContact, deleteContact, changeFilter };

export default actions;
