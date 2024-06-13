import React, { useEffect, useState, forwardRef } from "react";
import axios from "axios";

const WorkExperienceList = forwardRef((props, ref) => {
  const [hoverId, setHoverId] = useState(null);
  const [workExperiences, setWorkExperiences] = useState([]);

  useEffect(() => {
    const fetchWorkExperiences = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/work-experiences/",
        );
        setWorkExperiences(response.data);
      } catch (error) {
        console.error("Error fetching work experiences:", error);
      }
    };

    fetchWorkExperiences();
  }, []);

  return (
    <div id="section2" className="work-experiences content-section" ref={ref}>
      <h2 className="section-title">Work Experiences</h2>
      {workExperiences.length > 0 ? (
        <ul>
          {workExperiences.map((experience) => (
            <li 
              key={experience.id}
              onMouseEnter={() => setHoverId(experience.id)}
              onMouseLeave={() => setHoverId(null)}
              className={hoverId && hoverId !== experience.id ? 'faded' : ''}
            >
              <h2>{experience.title}</h2>
              <p>{experience.when}</p>
              <p>{experience.description}</p>
              <p>Skills: {experience.skills.join(", ")}</p>
              {experience.link && (
                <p>
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience.link}
                  </a>
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No work experiences found.</p>
      )}
    </div>
  );
});

export default WorkExperienceList;
