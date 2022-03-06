import { combineReducers } from "redux";
import todosReducer from './todos';
import themeReducer from './theme';

export default combineReducers({
    todos: todosReducer,
    theme: themeReducer
})