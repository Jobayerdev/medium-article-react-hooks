import React, { useState, useContext } from "react";
import { myContext } from "../context/Context";

const Profiles = () => {
	const { data } = useContext(myContext);

	return (
		<div className="profiles">
			{data.map((user, i) => (
				<div className="profile" key={i}>
					<div className="avatar">
						<img
							src="https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg"
							alt=""
						/>
					</div>
					<div className="info">
						<h3>{user.name}</h3>
						<p>{user.role}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Profiles;
