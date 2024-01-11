import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addtodo: (state, action) => {
      state.push(action.payload);
    },

    removeTodo: (state, action) => {
      state.pop(action.payload);
    },
  },
});

export default todoslice.reducer;
export const { addtodo, removeTodo } = todoslice.actions;
