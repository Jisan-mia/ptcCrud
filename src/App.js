import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import "./Scss/main.scss";

function App() {
	const [todoList, setTodoList] = useState([]);

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
				<AddTodo addTodo={addTodo} />
			</div>
		</div>
	);
}

export default App;
