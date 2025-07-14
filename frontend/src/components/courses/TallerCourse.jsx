import React from "react";
import { useNavigate } from "react-router-dom";

export const CardTaller = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tallerPage/${course.courseName}`);
  };

  return (
    <div className="card card-taller" onClick={handleClick}>
      <div className="card-image-taller">
  <div className="image-wrapper-taller">
<img
  src="https://i.postimg.cc/CLYjntPp/Taller-III-IN6-CV.gif"
  alt="GIF del curso Taller"
  className="card-gif-taller"
/>
  </div>
  <div className="category-tag-taller">Práctico</div>
</div>
      <div className="card-content-taller">
        <div className="card-meta-taller">
          <span className="duration-taller">12 semanas</span>
          <span className="level-taller">Intermedio</span>
        </div>
        <h3 className="card-title-taller">{course.courseName}</h3>
        <p className="card-text-taller">{course.description}</p>
        <div className="card-footer-taller">
          <span className="author-taller">Por: Equipo Educativo</span>
          <button className="action-button-taller">Ver detalles →</button>
        </div>
      </div>
    </div>
  );
};
