import React, { useState } from "react";

const Header = ({ todoList }) => {
	const [date, setDate] = useState(new Date().toDateString());
	return (
		<div className="header ">
			<h3>{date}</h3>
			<p>{todoList.length ? todoList.length : 0} Tasks</p>
		</div>
	);
};

export default Header;
