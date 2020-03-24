import React, { createContext, useState } from "react";

export const myContext = createContext();

const Context = (props) => {
	const [data, setData] = useState([]);

	const updateData = (useInputData) => {
		const userData = [...data];
		userData.push(useInputData);
		setData(userData);
	};

	return (
		<myContext.Provider value={{ data, updateData }}>
			{props.children}
		</myContext.Provider>
	);
};
export default Context;
