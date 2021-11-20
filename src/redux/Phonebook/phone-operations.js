import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsApi from "../../service/phoneContacts-api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      return await contactsApi.addContact(contact);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
