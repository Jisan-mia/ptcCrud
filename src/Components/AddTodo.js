import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
	const [todoText, setTodoText] = useState("");
	const handleAddTodo = (e) => {
		e.preventDefault();
		if (todoText) {
			addTodo(todoText);
			setTodoText("");
		} else {
			alert("Please add your todo");
		}
	};
	return (
		<form onSubmit={handleAddTodo}>
			<input
				type="text"
				value={todoText}
				onChange={(e) => setTodoText(e.target.value)}
			/>
			<button>
				<i className="fas fa-plus "></i>
			</button>
		</form>
	);
};

export default AddTodo;
