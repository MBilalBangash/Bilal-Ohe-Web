import { createSlice } from "@reduxjs/toolkit";
import { loginUser, newApply } from "../../../service/apply";
import Cookies from "js-cookie";

const userSlice = createSlice({
  name: "apply",
  initialState: {
    apply: null,
    applyLoading: false,
    applyError: null,

    user: null,
    loginUserLoading: false,
    loginUserError: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(newApply.pending, (state, action) => {
        state.applyLoading = true;
        state.applyError = null;
      })
      .addCase(newApply.fulfilled, (state, action) => {
        state.applyLoading = false;
        state.apply = action.payload;
        state.applyError = null;
      })
      .addCase(newApply.rejected, (state, action) => {
        state.applyLoading = false;
        state.applyError = action.error.message;
      })

      //-----User Login-----

      .addCase(loginUser.pending, (state, action) => {
        state.loginUserLoading = true;
        state.loginUserError = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginUserLoading = false;
        state.user = action.payload;
        state.loginUserError = null;
        console.log("action", action)
        Cookies.set("token", action.payload.token, {
          path: "/",
          secure: true,
          sameSite: "Strict",
        });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginUserLoading = false;
        state.loginUserError = action.error.message;
      });
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
