import { useState } from "react";
import Header from "./Header";
import "./form.css";

import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    
	const [petName, setPetName] = useState("");
	const [petType, setPetType] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const handleSubmit = () => {
		
		navigate("/table", {
			state: {
				petName,
				petType,
				name,
				email,
				phone,
			},
		});
	};

	return (
		<div className="body">
			<Header />

			<div className="form">
				<label htmlFor="petName">Pet Name</label>
				<input
					type="text"
					id="petName"
					placeholder="Pet Name"
					onChange={(e) => setPetName(e.target.value)}
				/>

				<label htmlFor="petType">Pet Type</label>
				<input
					type="text"
					id="petType"
					placeholder="Pet Type"
					onChange={(e) => setPetType(e.target.value)}
				/>

				<label htmlFor="Name">Your Name</label>
				<input
					type="text"
					id="Name"
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
				/>

				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label htmlFor="phone">Phone</label>
				<input
					type="number"
					id="phone"
					placeholder="Phone"
					onChange={(e) => setPhone(e.target.value)}
				/>

				<button onClick={handleSubmit}>Submit</button>
			</div>
		</div>
	);
};

export default Form;
