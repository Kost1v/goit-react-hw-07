import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectNameFilter = (state) => state.filters.name;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) =>
    contacts?.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase().trim())
    )
);
