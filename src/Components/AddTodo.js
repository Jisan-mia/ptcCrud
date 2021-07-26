import React from "react";

const AddTodo = ({ handleTodoInput, todoTextInput, handleTodoSubmit }) => {
	return (
		<form onSubmit={handleTodoSubmit}>
			<input
				type="text"
				value={todoTextInput}
				onChange={(e) => handleTodoInput(e.target.value)}
			/>
			<button>
				<i className="fas fa-plus "></i>
			</button>
		</form>
	);
};

export default AddTodo;
