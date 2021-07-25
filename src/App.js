import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import "./Scss/main.scss";

function App() {
	const [todoList, setTodoList] = useState([]);

	const addTodo = (todo) => {
		const newTodo = {
			id: new Date().getTime().toString(),
			todo,
		};

		setTodoList([...todoList, newTodo]);
	};
	return (
		<div className="container">
			<div className="main-section">
				<Header />
				<Todos todoList={todoList} />
				<AddTodo addTodo={addTodo} />
			</div>
		</div>
	);
}

export default App;
