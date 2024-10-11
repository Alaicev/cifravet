import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../api/api";

export const LoginUser = createAsyncThunk("/post/login", async (data) => {
  const t = await instance.post("/login", data);
  const token = t.data.token;
  localStorage.setItem('token', token);
  const res = await instance.get("/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return { token, userData: res.data }; 
});

export const getUser = createAsyncThunk("/get/me", async (token) => {
  const res = await instance.get("/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res
})


const initialState = {
  User: {
    UserData: {
      items: [],
      status: "idle",
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.User.UserData.items = [];
        state.User.UserData.status = "loading";
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.User.UserData.items = action.payload.userData;
        state.User.UserData.status = "fulfilled";
      })
      .addCase(LoginUser.rejected, (state) => {
        state.User.UserData.status = "error";
      })
      .addCase(getUser.pending, (state) => {
        state.User.UserData.items = [];
        state.User.UserData.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.User.UserData.items = action.payload.data;
        debugger
        state.User.UserData.status = "fulfilled";
      })
      .addCase(getUser.rejected, (state) => {
        state.User.UserData.status = "error";
      });
  },
});

export const UserSlice = userSlice.reducer;
