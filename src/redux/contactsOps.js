import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactDelete, getContacts, postContact } from "../api/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const data = await getContacts();

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const data = await postContact(contact);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact  = createAsyncThunk("contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const data = await contactDelete(contactId);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
)

