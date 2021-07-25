import Header from "./Components/Header";
import "./Scss/main.scss";

function App() {
	return (
		<div className="container">
			<div className="main-section">
				<Header />
				<div className="todo-area">Todo area</div>
				<form className="add-todo-area">add tod do area</form>
			</div>
		</div>
	);
}

export default App;
