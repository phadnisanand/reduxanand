import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todos: []
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        text: action.payload,
      };
      state.todos.push(todo);
      state.count += 1;
    },
    updateTodo: (state, action) => {
      const updatedTodo = {
         id:  action.payload.currentId,
         text: action.payload.input,
      };
      const updatedItem = state.todos.map((todo) => {
        return todo.id === action.payload.currentId ? updatedTodo : todo;
      });
      state.todos = updatedItem;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
