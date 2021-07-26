import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import "./Scss/main.scss";

function App() {
	const [todoList, setTodoList] = useState([]);
	const [todoTextInput, setTodoTextInput] = useState("");
	const [editItem, setEditItem] = useState("");
	const [toggleEdit, setToggleEdit] = useState(false);

	// handle todo text input
	const handleTodoInput = (todoText) => {
		setTodoTextInput(todoText);
	};
	// handle submit button
	const handleTodoSubmit = (e) => {
		e.preventDefault();
		if (!todoTextInput) {
			alert("Please add your todo");
		} else if (todoTextInput && toggleEdit) {
			// const updatedTodo = todoList.map((curElem) => {
			// 	if (curElem.id === editItem) {
			// 		return { ...curElem, todo: todoTextInput };
			// 	}
			// 	return curElem;
			// });

			const updatedTodo = todoList.map((todo) =>
				todo.id === editItem ? { ...todo, todo: todoTextInput } : todo
			);

			setTodoList(updatedTodo);
			setToggleEdit(false);
			setTodoTextInput("");
			setEditItem(null);
		} else {
			addTodo(todoTextInput);
			setTodoTextInput("");
		}
	};

	// add todo
	const addTodo = (todo) => {
		const newTodo = {
			id: new Date().getTime().toString(),
			todo,
		};

		setTodoList([...todoList, newTodo]);
	};

	// delete a todo
	const deleteTodo = (id) => {
		const remainingTodo = todoList.filter((todo) => todo.id !== id);
		setTodoList(remainingTodo);
	};

	// edit a todo
	const editTodo = (id) => {
		const toBedEdited = todoList.find((todo) => todo.id === id);
		console.log(toBedEdited);
		setTodoTextInput(toBedEdited.todo);
		setEditItem(id);
		setToggleEdit(true);
	};
	return (
		<div className="container">
			<div className="main-section">
				<Header todoList={todoList} />
				<Todos
					todoList={todoList}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
				/>
				<AddTodo
					addTodo={addTodo}
					handleTodoInput={handleTodoInput}
					todoTextInput={todoTextInput}
					handleTodoSubmit={handleTodoSubmit}
				/>
			</div>
		</div>
	);
}

export default App;
