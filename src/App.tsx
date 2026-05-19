import Form from "./components/Form";
import Table from "./components/Table";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Form />} />
				<Route path="/table" element={<Table />} />
			</Routes>
		</>
	);
}

export default App;
