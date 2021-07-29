import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index";

const AddTodo = ({
	handleTodoInput,
	todoTextInput,
	handleTodoSubmit,
	isRedux,
}) => {
	const [todoInput, setTodoInput] = useState("");
	const dispatch = useDispatch();
	const { addTodoRedux } = bindActionCreators(actionCreators, dispatch);
	const addToRedux = (e) => {
		e.preventDefault();
		if (todoInput.trim() !== "") {
			const newTodo = {
				id: new Date().getTime().toString(),
				todo: todoInput,
			};
			addTodoRedux(newTodo);
		} else {
			alert("Please enter your todo");
		}

		setTodoInput("");
	};

	return (
		<form onSubmit={isRedux ? addToRedux : handleTodoSubmit}>
			<input
				type="text"
				value={isRedux ? todoInput : todoTextInput}
				onChange={(e) => {
					isRedux
						? setTodoInput(e.target.value)
						: handleTodoInput(e.target.value);
				}}
			/>
			<button>
				<i className="fas fa-plus "></i>
			</button>
		</form>
	);
};

export default AddTodo;
