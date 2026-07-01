import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./utils/scrollToTop";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Home from "./pages/Home";
import "./styles/main.css";

function App() {
  return (
	<div className="App">
		<Router>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/My-Portfolio-2/" element={<Home />} />
				<Route path="/My-Portfolio-2/projects" element={<Projects />} />
				<Route path="/My-Portfolio-2/project/:id" element={<Project />} />
				<Route path="/My-Portfolio-2/contacts" element={<Contacts />} />
			</Routes>
			<Footer />
		</Router>
	</div>
  );
};

export default App;
