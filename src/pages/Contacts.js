const Contacts = () => {
	document.title = "Контакты";

    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Контакты</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Город</h2>
						<p>Барнаул, Россия</p>
					</li>
					
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							<a href="https://t.me/cheradam?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D1%81%D0%B0%D0%B9%D1%82." target="_blank" rel="noreferrer">@cheradam</a>
							<span> / </span>
							<a href="https://api.whatsapp.com/send/?phone=79132421225&text=Здравствуйте!%20+Хочу%20заказать%20сайт.&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">+7 (913) 242-12-25</a>
						</p>
					</li>

					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:adamchereshniuk@gmail.com?cc=&subject=%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D1%81%D0%B0%D0%B9%D1%82&body=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D1%81%D0%B0%D0%B9%D1%82." target="_blank" rel="noreferrer">adamchereshniuk@gmail.com</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;