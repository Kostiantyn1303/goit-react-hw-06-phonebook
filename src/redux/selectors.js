export const getContacts = state => {
  const sortedContacts = [...state.contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return sortedContacts;
};
export const getFilter = state => state.filter;
