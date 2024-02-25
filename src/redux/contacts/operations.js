import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://65db8acc3ea883a15291e423.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contact");
      return response.data;
    } catch (error) {
      toast.error("Oops, there was an error, please try reloading!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contact", contact);
      return response.data;
    } catch (error) {
      toast.error("Oops, there was an error, please try reloading!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contact/${contactId}`);
      return response.data;
    } catch (error) {
      toast.error("Oops, there was an error, please try reloading!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
