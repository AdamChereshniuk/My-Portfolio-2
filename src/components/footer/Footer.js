import "./style.css";

import vk from './../../img/icons/vk.svg';
import twitter from './../../img/icons/twitter.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://vk.com/id792001441" target="_blank" rel="noreferrer">
								<img src={vk} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://x.com/cheradam2011" target="_blank" rel="noreferrer">
								<img src={twitter} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://github.com/cheradam13" target="_blank" rel="noreferrer">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2025 frontend-dev.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;