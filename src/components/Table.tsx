import Header from "./Header";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "./table.css";

const Table = () => {

    const navigate = useNavigate();

	const location = useLocation();
	console.log(location.state);
	const item = location.state;

    const handleSubmit = () => {
        navigate("/");
    }

	return (
		<div>
			<Header />

			<div className="tab">
				<table>
					<thead>
						<tr>
							<th>Pet Name</th>
							<th>Pet Type</th>
							<th>Adopter name</th>
							<th>Email</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{item.petName}</td>
							<td>{item.petType}</td>
							<td>{item.name}</td>
							<td>{item.email}</td>
							<td>{item.phone}</td>
						</tr>
					</tbody>
				</table>

                <button onClick={handleSubmit}>Go back</button>
			</div>
		</div>
	);
};

export default Table;
