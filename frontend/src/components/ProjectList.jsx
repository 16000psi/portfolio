import React, { useEffect, useState, forwardRef } from "react";
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
        <div>
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoverId(project.id)}
              onMouseLeave={() => setHoverId(null)}
              className={hoverId && hoverId !== project.id ? "faded" : ""}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p>
                Skills:{" "}
                {typeof project.skills === "string"
                  ? project.skills.split(",").join(", ")
                  : project.skills}
              </p>
              {project.repository && (
                <p>
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.repository}
                  </a>
                </p>
              )}
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
          ))}
        </div>
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
});

export default ProjectList;
