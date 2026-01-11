import { Card, Button } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "TO-DO-App",
      description: "To-Do App built using React + Vite, HTML, CSS, Javscript",
      liveLink: "https://todo-app-gamma-azure-28.vercel.app/",
      githubLink: "https://github.com/MDSaad1313/todo-app",
    },
    {
      title: "Bharat Clock",
      description: "React + Vite + Vercel",
      liveLink: "https://bharat-clock-lime.vercel.app/",
      githubLink: "https://github.com/MDSaad1313/bharat-clock",
    },
    {
      title: "Under Process",
      description: "",
      liveLink: "",
      githubLink: "https://github.com/MDSaad1313/",
    },
    {
      title: "Under Process",
      description: "",
      liveLink: "",
      githubLink: "https://github.com/MDSaad1313/",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Card key={index} className="project-card">
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>

              <div className="project-buttons">
                {/* Live Demo Button */}
                <Button
                  variant="primary"
                  href={project.liveLink}
                  target="_blank"
                >
                  Live Demo <FaExternalLinkAlt />
                </Button>

                {/* GitHub Button */}
                <Button
                  variant="dark"
                  href={project.githubLink}
                  target="_blank"
                >
                  <FaGithub size={20} />
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
