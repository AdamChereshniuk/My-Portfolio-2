const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Barnaul, Russia</p>
					</li>
					
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							<a href="https://telegram.me/cheradam" target="_blank" rel="noreferrer">@cheradam</a>
							<span> / </span>
							<a href="tel:+79132421225" target="_blank" rel="noreferrer">+7 (913) 242-12-25</a>
						</p>
					</li>

					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:adamchereshniuk@gmail.com" target="_blank" rel="noreferrer">
								adamchereshniuk@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;