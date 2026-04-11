import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Adam</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<NavLink
					to="/projects"
					className="btn"
				>
					View Projects
				</NavLink>
			</div>
		</header>
	);
}

export default Header;