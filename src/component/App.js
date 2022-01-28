import axios from "axios";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		const API = "http://localhost:3001";

		axios.get(`${API}/users_list`).then((res) => {
			console.log(res.data);
			console.log("^^all users list");
		});

		const username = "vin1";
		const email = "vin1@vin.com";

		const isDuplicateUsername = axios.get(`${API}/users_list?username=${username}`);
		const isDuplicateEmail = axios.get(`${API}/users_list?email=${email}`);
		Promise.all([isDuplicateUsername, isDuplicateEmail]).then((response) => {
			const duplicateUsernameResponse = response[0];
			const duplicateEmailResponse = response[1];
			console.log(duplicateUsernameResponse.data);
			console.log("^^duplicate username check");
			console.log(duplicateEmailResponse.data);
			console.log("^^duplicate email check");
		});
	}, []);

	return (
		<div>
			<h1>App component.</h1>
			<h2>Open the console.</h2>
		</div>
	);
};

export default App;
