import React from "react";
import Todo from "./Todo";

const Todos = ({ todoList, deleteTodo, editTodo }) => {
	return (
		<div className="todo-area">
			<ul className="todo-container">
				{todoList.length ? (
					todoList.map((todo) => (
						<Todo
							key={todo.id}
							todoItem={todo}
							deleteTodo={deleteTodo}
							editTodo={editTodo}
						/>
					))
				) : (
					<li style={{ color: "#80808073", fontWeight: "400" }}>
						You haven't any todo
					</li>
				)}
			</ul>
		</div>
	);
};

export default Todos;
