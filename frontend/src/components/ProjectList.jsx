import React, { useEffect, useState, forwardRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import axios from "axios";

const ProjectList = forwardRef((props, ref) => {
  const [hoverId, setHoverId] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/projects/");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div id="section3" className="projects content-section" ref={ref}>
      <h2 className="section-title">Projects</h2>
      {projects.length > 0 ? (
        <div className="card-list">
          {projects.map(
            (project) =>
              !project.hidden && (
                <a
                  key={project.id}
                  href={project.repository ? project.repository : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoverId(project.id)}
                  onMouseLeave={() => setHoverId(null)}
                  className={`card project-card ${
                    hoverId && hoverId !== project.id ? "faded" : ""
                  }`}
                >
                  <div className="card__left">
                    {project.image && (
                      <p>
                        <img
                          src={project.image}
                          alt={`${project.title} image`}
                          style={{ maxWidth: "100%" }}
                        />
                      </p>
                    )}
                  </div>

                  <div className="card__right">
                    <h4>
                      {project.title}{"   "}
                      <MdArrowOutward className="external-link-icon" />
                    </h4>
                    <p>{project.description}</p>
                    <div className="skills-container">
                      {project.skills.map((skill, i) => (
                        <p key={i}>{skill}</p>
                      ))}
                    </div>
                  </div>
                </a>
              ),
          )}
        </div>
      ) : (
        <p>No projects found.</p>
      )}
      <a
        className="card-list__link"
        href="https://github.com/16000psi"
        target="_blank"
      >
        Visit my Github
        {"   "}
        <FaExternalLinkAlt className="external-link-icon" />
      </a>
    </div>
  );
});

export default ProjectList;
