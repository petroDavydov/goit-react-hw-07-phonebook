export const getContacts = state => state.contacts.contactItems;
export const getFilter = state => state.contacts.filter;
export const getFiltredContacts = state => {
  const lowerCasedFilter = getFilter(state).toLowerCase();
  const filteredContacts = getContacts(state).filter(({ name }) =>
    name.toLowerCase().includes(lowerCasedFilter),
  );
  return filteredContacts;
};