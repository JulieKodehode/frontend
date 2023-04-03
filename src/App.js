import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/Dashboard/DashLayout";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import EditNote from "./features/notes/EditNote";
import NewNote from "./features/notes/NewNote";
import Prefetch from "./features/auth/Prefetch";

const App = () => {
	return (
		<Routes>
			{/* Start Layout, basic layout of side */}
			<Route path="/" element={<Layout />}>
				{/* Two public routes, public and login */}
				<Route index element={<Public />} />
				<Route path="login" element={<Login />} />

				{/* Start Dash */}
				<Route element={<Prefetch />}>
					<Route path="dash" element={<DashLayout />}>
						<Route index element={<Welcome />} />

						{/* Users */}
						<Route path="users">
							<Route index element={<UsersList />} />
							<Route path=":id" element={<EditUser />} />
							<Route path="new" element={<NewUserForm />} />
						</Route>

						{/* Notes */}
						<Route path="notes">
							<Route index element={<NotesList />} />
							<Route path=":id" element={<EditNote />} />
							<Route path="new" element={<NewNote />} />
						</Route>
					</Route>
				</Route>
				{/* End Dash*/}
			</Route>
			{/* End Layout */}
		</Routes>
	);
};

export default App;
