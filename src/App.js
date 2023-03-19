import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/Dashboard/DashLayout";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";

const App = () => {
	return (
		<Routes>
			{/* Start Layout, basic layout of side */}
			<Route path="/" element={<Layout />}>
				{/* Two public routes, public and login */}
				<Route index element={<Public />} />
				<Route path="login" element={<Login />} />

				{/* Start Dash, going to be private */}
				<Route path="dash" element={<DashLayout />}>
					<Route index element={<Welcome />} />
					<Route path="notes">
						<Route index element={<NotesList />} />
					</Route>
					<Route path="users">
						<Route index element={<UsersList />} />
					</Route>
				</Route>
				{/* End Dash*/}
			</Route>
			{/* End Layout */}
		</Routes>
	);
};

export default App;
