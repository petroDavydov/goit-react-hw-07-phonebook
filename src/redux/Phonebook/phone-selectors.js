import { createSelector } from "reselect";

export const getContacts = (state) => state.Phonebook.entities;
export const getFilter = (state) => state.Phonebook.filter;
export const getLoading = (state) => state.Phonebook.isLoading;
export const getError = (state) => state.Phonebook.error;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
