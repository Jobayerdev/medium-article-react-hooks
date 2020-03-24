import React from "react";
import "./App.css";
import Profiles from "./components/Profiles";
import CreateProfile from "./components/CreateProfile";
import Context from "./context/Context";

function App() {
	return (
		<div className="app-container">
			<Context>
				<CreateProfile />
				<Profiles />
			</Context>
		</div>
	);
}

export default App;
