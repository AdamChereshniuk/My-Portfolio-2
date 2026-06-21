import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="container">
				<h1 className="header__title">
					<strong>Привет! Меня зовут <em>Адам</em>, я Frontend-разработчик.</strong>
				</h1>
				<div className="header__text">
					<p>Создаю не просто красивые лендинги, а сайты, которые приносят результат.</p>
				</div>
				<NavLink
					to="/My-Portfolio-2/projects"
					className="btn"
				>
					Посмотреть проекты
				</NavLink>
			</div>
		</header>
	);
}

export default Header;