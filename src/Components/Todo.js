import React from "react";

const Todo = ({ todoItem, deleteTodo, editTodo }) => {
	const { id, todo } = todoItem;
	return (
		<>
			<li>
				<p className="todo-text">{todo}</p>
				<div className="actions">
					<i className="far fa-edit" onClick={() => editTodo(id)}></i>
					<i className="far fa-trash-alt" onClick={() => deleteTodo(id)}></i>
				</div>
			</li>
		</>
	);
};

export default Todo;
