import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchUserData = createAsyncThunk(
//   "user/fetchUserData",
//   async ({}) => {
//     try {
//       const response = await fetch(
//         "https://ohe-server.vercel.app/api/v1/applies/new"
//       );
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       throw error;
//     }
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
  },

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserData.pending, (state, action) => {})
//       .addCase(fetchUserData.fulfilled, (state, action) => {})
//       .addCase(fetchUserData.rejected, (state, action) => {});
//   },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
