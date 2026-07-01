import { projects } from "./../helpers/projectsList";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnLiveSite from "../components/btnLiveSite/btnLiveSite";

const Project = () => {
	const id = Number(window.location.pathname.replace("/My-Portfolio-2/project/", ""));
	const project = projects.filter(project => project.id === id)[0];
	document.title = `Проект ${project.title}`;
	
    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{project.title}</h1>

					{project.description && (
						<div className="project-details__desc">
							<p>{project.description} Сделан на {project.skills}.</p>
						</div>
					)}

					<img className="project-details__cover" src={project.imgBig} alt={project.title} />

					<div className="project-details__btns">
						{project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
						<BtnLiveSite link={project.liveSiteLink} />
					</div>
				</div>
			</div>
		</main>
	);
}

export default Project;