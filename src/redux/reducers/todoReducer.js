const getLocalTodos = () => {
	const reduxLocalTodo = localStorage.getItem("todoRedux");

	if (reduxLocalTodo) {
		return JSON.parse(reduxLocalTodo);
	} else {
		return [];
	}
};

const initialState = {
	todos: getLocalTodos(),
};

const todoReducers = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TODO":
			const newTodo = {
				id: action.payload.id,
				todo: action.payload.todo,
			};
			return { ...state, todos: [...state.todos, newTodo] };
		case "REMOVE_TODO":
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};

		default:
			return state;
	}
};

export default todoReducers;
