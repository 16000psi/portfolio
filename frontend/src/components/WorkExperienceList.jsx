import React, { useEffect, useState, forwardRef } from "react";
import axios from "axios";

const WorkExperienceList = forwardRef((props, ref) => {
  const [workExperiences, setWorkExperiences] = useState([]);
  const [hoverId, setHoverId] = useState(null);

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
        <div>
          {workExperiences.map((experience) => (
            <a
              key={experience.id}
              href={experience.link ? experience.link : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`experience-card ${
                hoverId && hoverId !== experience.id ? "faded" : ""
              }`}
              onMouseEnter={() => setHoverId(experience.id)}
              onMouseLeave={() => setHoverId(null)}
            >
              <div className="experience-card__left">
                <p>{experience.when.toUpperCase()}</p>
              </div>
              <div className="experience-card__right">
                <h4>{experience.title}</h4>
                <p>{experience.description}</p>
                <div className="skills-container">
                  {experience.skills.map((skill, i) => (
                    <p key={i}>{skill}</p>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p>No work experiences found.</p>
      )}
    </div>
  );
});

export default WorkExperienceList;
