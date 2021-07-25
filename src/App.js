import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import "./Scss/main.scss";

function App() {
	return (
		<div className="container">
			<div className="main-section">
				<Header />
				<Todos />
				<AddTodo />
			</div>
		</div>
	);
}

export default App;
