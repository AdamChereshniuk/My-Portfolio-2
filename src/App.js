import "./styles/main.css";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

import ScrollToTop from "./utils/scrollToTop"

function App() {
  return (
	<div className="App">
		<BrowserRouter basename={import.meta.url.basename}>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/My-Portfolio-2/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/project/:id" element={<Project />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</div>
  );
}

export default App;
