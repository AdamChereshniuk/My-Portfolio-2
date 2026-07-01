import { projects } from "./../helpers/projectsList";
import { useState } from "react";
import Project from "../components/project/Project";

const Projects = () => {
	const [currentTab, setCurrentTab] = useState("htmlCssJs"); // htmlCssJs | react | vue | wordpress
	const htmlCssJsProjects = projects.filter(project => project.tab === "HTML & CSS" || project.tab === "JavaScript");
	const reactProjects = projects.filter(project => project.tab === "ReactJS");
	const vueProjects = projects.filter(project => project.tab === "VueJS");
	const wordpressProjects = projects.filter(project => project.tab === "WordPress");
	document.title = "Проекты";

	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Проекты</h2>
				<ul className="tabs">
					<li className={`tab ${currentTab === "htmlCssJs" && "active"}`} onClick={() => setCurrentTab("htmlCssJs")}>HTML & CSS & JS</li>
					<li className={`tab ${currentTab === "react" && "active"}`} onClick={() => setCurrentTab("react")}>ReactJS</li>
					<li className={`tab ${currentTab === "vue" && "active"}`} onClick={() => setCurrentTab("vue")}>VueJS</li>
					<li className={`tab ${currentTab === "wordpress" && "active"}`} onClick={() => setCurrentTab("wordpress")}>WordPress</li>
				</ul>
				<ul className="projects">
					{currentTab === "htmlCssJs" && htmlCssJsProjects.map((project, index) => <Project key={index} title={project.title} img={project.img} index={project.id} />)}
					{currentTab === "react" && reactProjects.map((project, index) => <Project key={index} title={project.title} img={project.img} index={project.id} />)}
					{currentTab === "vue" && vueProjects.map((project, index) => <Project key={index} title={project.title} img={project.img} index={project.id} />)}
					{currentTab === "wordpress" && wordpressProjects.map((project, index) => <Project key={index} title={project.title} img={project.img} index={project.id} />)}
				</ul>
			</div>
		</main>
	);
};

export default Projects;
