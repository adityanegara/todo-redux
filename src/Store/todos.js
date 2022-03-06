import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";


const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        list: [],
    },
    reducers: {
        todoAdded: (todos, action) => {
            todos.list.push(action.payload);
        },
        todoRemoved: (todos, action) =>{
            const newTodos =  todos.list.filter(todo => todo.id !== action.payload.id);
            todos.list = newTodos;
        },
        todoFinished: (todos, action) =>{
            const index = todos.list.findIndex(todo => todo.id === action.payload.id);
            todos.list[index].isFinish = true;
        },
        todoUnfinished: (todos, action) =>{
            const index = todos.list.findIndex(todo => todo.id === action.payload.id);
            todos.list[index].isFinish = false;
        }
    }
})

export const {todoAdded, todoRemoved, todoFinished, todoUnfinished,} = todosSlice.actions;
export default todosSlice.reducer;
//selector
export const getFinishTodos = createSelector(
    state => state.entities.todos.list,
    (todos) => todos.filter(todo => todo.isFinish === true)
)

export const getUnfinishTodos = createSelector(
    state => state.entities.todos.list,
    (todos) => todos
)