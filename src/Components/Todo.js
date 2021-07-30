import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index";

const Todo = ({ todoItem, deleteTodo, editTodo, isRedux }) => {
	const dispatch = useDispatch();
	// here i'm binding dispatch with all actions creators using bindActionCreators of redux
	// then destructuring the actions creators and just calling them with appropriate parameter
	const { removeTodoRedux } = bindActionCreators(actionCreators, dispatch);

	const { id, todo } = todoItem;
	return (
		<>
			<li>
				<p className="todo-text">{todo}</p>
				<div className="actions">
					{!isRedux && (
						<i className="far fa-edit" onClick={() => editTodo(id)}></i>
					)}
					<i
						className="far fa-trash-alt"
						onClick={() => {
							isRedux ? removeTodoRedux(id) : deleteTodo(id);
						}}
					></i>
				</div>
			</li>
		</>
	);
};

export default Todo;
