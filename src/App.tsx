import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/react/TopBar.tsx";
import HomePage from "./components/react/HomePage.tsx";
import InternalPage from "./components/react/InternalPage.tsx";

function App() {
	return (
		<Router>
			<TopBar />
			<div className="main-content">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/internal" element={<InternalPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
