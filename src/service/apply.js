import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const newApply = createAsyncThunk(
  "apply/newApply",
  async ({ formData, navigate }, { rejectWithValue }) => {
    try {
      console.log("Sending request with formData:", formData);
      const response = await axios.post(
        "https://ohe-server.vercel.app/api/v1/applies/new",
        formData
      );
      toast.success(response.data.message, {
        autoClose: 2000,
      });
      navigate("/");
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message, {
        duration: 3000
      });
      return rejectWithValue(message);
    }
  }
);

// Async Thunk for User Login

export const loginUser = createAsyncThunk(
  "apply/loginUser",
  async ({ formData, navigate }, { rejectWithValue }) => {
    try {
      console.log("Sending request with formData:", formData);
      const response = await axios.post(
        "https://ohe-server.vercel.app/api/v1/candidates/signin",
        formData
      );
      toast.success(response.data.message, {
        autoClose: 2000, 
      });
      navigate("/");
      console.log("response", response)
      Cookies.set("token", response.data.token)
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message, {
        duration:3000
      });
      return rejectWithValue(message);
    }
  }
);
