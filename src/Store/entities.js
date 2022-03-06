import { combineReducers } from "redux";
import todosReducer from './todos';
import themeReducer from './theme';
import sortByReducer from './sortBy';

export default combineReducers({
    todos: todosReducer,
    theme: themeReducer,
    sortBy: sortByReducer
})