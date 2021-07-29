import { combineReducers } from "redux";
import todoReducers from "./todoReducer";

const reducers = combineReducers({
	Todos: todoReducers,
});

export default reducers;
