export const addTodoRedux = (todo) => {
	return (dispatch) => {
		dispatch({
			type: "ADD_TODO",
			payload: todo,
		});
	};
};
export const removeTodoRedux = (id) => {
	return (dispatch) => {
		dispatch({
			type: "REMOVE_TODO",
			payload: id,
		});
	};
};

export const editTodoRedux = (id) => {
	return (dispatch) => {
		dispatch({
			type: "EDIT_TODO",
			payload: id,
		});
	};
};
