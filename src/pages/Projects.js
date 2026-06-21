import Project from '../components/project/Project';
import {projects} from "./../helpers/projectsList";
import { useState } from 'react';

const Projects = () => {
	document.title = "Проекты";
	const [currentTab, setCurrentTab] = useState("htmlCssJs");
	const htmlCssJsProjects = projects.filter(project => project.tab === "HTML & CSS" || project.tab === "JavaScript");
	const reactVueProjects = projects.filter(project => project.tab === "ReactJS" || project.tab === "VueJS");
	const wordpressProjects = projects.filter(project => project.tab === "WordPress");
	const tildaProjects = projects.filter(project => project.tab === "Tilda");

	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Проекты</h2>
				<ul className="tabs">
					<li className={`tab ${currentTab === "htmlCssJs" && "active"}`} onClick={() => setCurrentTab("htmlCssJs")}>HTML & CSS & JS</li>
					<li className={`tab ${currentTab === "reactVue" && "active"}`} onClick={() => setCurrentTab("reactVue")}>ReactJS & VueJS</li>
					<li className={`tab ${currentTab === "wordpress" && "active"}`} onClick={() => setCurrentTab("wordpress")}>WordPress</li>
					<li className={`tab ${currentTab === "tilda" && "active"}`} onClick={() => setCurrentTab("tilda")}>Tilda</li>
				</ul>
				<ul className="projects">
					{currentTab === "htmlCssJs" && htmlCssJsProjects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={project.id}
							/>
						);
					})}
					{currentTab === "reactVue" && reactVueProjects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={project.id}
							/>
						);
					})}
					{currentTab === "wordpress" && wordpressProjects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={project.id}
							/>
						);
					})}
					{currentTab === "tilda" && tildaProjects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={project.id}
							/>
						);
					})}
				</ul>
			</div>
		</main>
	);
};

export default Projects;
