import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./usersSlice.ts";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      return data as User[];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
