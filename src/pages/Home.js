import Header from './../components/header/Header'

const Home = () => {
	document.title = "Главная";

    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>
								HTML, CSS, SASS & LESS, JavaScript, TypeScript, ReactJS, Vite, Redux,
								NPM, BootStrap, GitHub, Figma, Tilda, WordPress
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<p>NodeJS, MySQL, PHP, Xampp</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;