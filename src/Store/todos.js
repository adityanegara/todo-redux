import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let id = 1;
const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        list: [],
    },
    reducers: {
        todoAdded: (todos, action) => {
            todos.list.push({
                id: ++id,
                isFinish: action.payload.isFinish,
                description: action.payload.description
            });
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
        },
        filterFinished : (todos) =>{
            const newTodos =  todos.list.filter(todo => todo.isFinish !== true);
            todos.list = newTodos;
        }
    }
})

export const {todoAdded, todoRemoved, todoFinished, todoUnfinished, filterFinished} = todosSlice.actions;
export default todosSlice.reducer;
//selector
export const getFinishTodos = createSelector(
    state => state.entities.todos.list,
    (todos) => todos.filter(todo => todo.isFinish === true)
)

export const getUnfinishTodos = createSelector(
    state => state.entities.todos.list,
    (todos) => todos.filter(todo => todo.isFinish === false)
)

export const getTodos = createSelector(
    state => state.entities.todos.list,
    (todos) => todos
)