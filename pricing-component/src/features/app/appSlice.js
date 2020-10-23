import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isAnnually: false,
  },
  reducers: {
    setAnnually: (state, action) => {
      state.isAnnually = action.payload.isAnnually;
    },
  },
});

export const { setAnnually } = appSlice.actions;

// how to pull the value
export const selectIsAnnually = (state) => state.app.isAnnually;

export default appSlice.reducer;
