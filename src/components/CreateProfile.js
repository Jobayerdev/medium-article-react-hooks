import React, { useContext, useState } from "react";

import { myContext } from "../context/Context";

const CreateProfile = () => {
	const [formData, setFormData] = useState({
		name: "",
		role: ""
	});
	const { updateData } = useContext(myContext);
	const handlerChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		updateData(formData);
	};

	return (
		<div className="add-profile">
			<form onSubmit={onSubmitHandler}>
				<input
					type="name"
					name="name"
					placeholder="Employer name"
					onChange={handlerChange}
				/>
				<input
					type="text"
					name="role"
					placeholder="Role"
					onChange={handlerChange}
				/>
				<input type="submit" value="add" />
			</form>
		</div>
	);
};

export default CreateProfile;
