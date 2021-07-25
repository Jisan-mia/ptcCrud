import React, { useState } from "react";

const Header = () => {
	const [date, setDate] = useState(new Date().toDateString());
	return (
		<div className="header ">
			<h3>{date}</h3>
			<p>Task count</p>
		</div>
	);
};

export default Header;
