import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "./../helpers/projectsList"
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

					<img
						src={project.imgBig}
						alt={project.title}
						className="project-details__cover"
					/>

					

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