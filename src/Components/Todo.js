import React from "react";

const Todo = ({ todoItem }) => {
	const { id, todo } = todoItem;
	return (
		<>
			<li>
				<p className="todo-text">{todo}</p>
				<div className="actions">
					<i className="far fa-edit"></i>
					<i className="far fa-trash-alt"></i>
				</div>
			</li>
		</>
	);
};

export default Todo;
