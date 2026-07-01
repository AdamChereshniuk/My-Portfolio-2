import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

const Navbar = () => {
	const activeLink = "nav-list__link nav-list__link--active";
	const normalLink = "nav-list__link";

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="/My-Portfolio-2/" className="logo">
						<strong>Freelancer</strong> portfolio
					</NavLink>

					<BtnDarkMode />

					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/My-Portfolio-2/">
								Главная
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/My-Portfolio-2/projects">Проекты</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to="/My-Portfolio-2/contacts">Контакты</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;