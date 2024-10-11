import { configureStore } from "@reduxjs/toolkit";
import {UserSlice} from "./User"

const store = configureStore({
  reducer: {
    User: UserSlice
  }
})

export default store;