import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { fetchContacts, addContact, deleteContact } from "./phone-operations";
import { changeFilter } from "./phone-actions"; // я так и не понял что єто

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.rejected]: () => false,
  [addContact.fulfilled]: () => false,
  [addContact.pending]: () => true,
  [addContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_state, { payload }) => payload,
  [fetchContacts.pending]: null,
  [addContact.pending]: null,
  [addContact.rejected]: (_state, { payload }) => payload,
  [deleteContact.pending]: null,
  [deleteContact.rejected]: (_state, { payload }) => payload,
});

const filter = createReducer("", {
  [changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({ entities, isLoading, error, filter });
