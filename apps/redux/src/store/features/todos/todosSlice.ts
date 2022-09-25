import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../"

interface TodosState {
  todos: String[]
}

const initialState: TodosState = {
  todos: []
}

export const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<string>) => {
      state.todos = [...state.todos, action.payload]
    }
  }
})

export const { createTodo } = todosSlice.actions
export const selectTodo = (state: RootState) => state.todos.todos

export default todosSlice.reducer