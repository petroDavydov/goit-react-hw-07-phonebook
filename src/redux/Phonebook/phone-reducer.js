import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./phone-actions";
import initialContacts from "../../json/contact.json";

const contactItems = createReducer(initialContacts, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ contactItems, filter });
