import { createReducer } from '@reduxjs/toolkit';
import { addContacts, deleteContacts } from './actions';

const contactsInitialState = [];

export const ContactsReducer = createReducer(contactsInitialState, {
  [addContacts]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContacts]: (state, action) => {
    return state.filter(task => task.id !== action.payload);
  },
});
