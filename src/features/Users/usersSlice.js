import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://reqres.in/api/users";

const initialState = {
  users: [],
  isLoading: true,
};

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  try {
    const response = await axios(url);
    return response.data.data;
  } catch (error) {
    return error;
  }
});

const usersSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default usersSlice.reducer;
