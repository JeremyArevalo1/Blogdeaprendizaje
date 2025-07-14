import React from "react";
import { useNavigate } from "react-router-dom";

export const CardTics = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ticsPage/${course.courseName}`);
  };

  return (
    <div className="card card-practica" onClick={handleClick}>
      <div className="card-image-practica">
  <div className="image-wrapper-Practica">
<img
  src="https://i.postimg.cc/ZKBh37Cj/Pr-ctica-Supervisada-IN6-CV.gif"
  alt="GIF del curso PracticaSupervisada"
  className="card-gif-Practica"
/>
  </div>
        <div className="category-tag-practica">Práctico</div>
      </div>
      <div className="card-content-practica">
        <div className="card-meta-practica">
          <span className="duration-practica">6 semanas</span>
          <span className="level-practica">Difícil</span>
        </div>
        <h3 className="card-title-practica">{course.courseName}</h3>
        <p className="card-text-practica">{course.description}</p>
        <div className="card-footer-practica">
          <span className="author-practica">Por: Equipo Educativo</span>
          <button className="action-button-practica">Ver detalles →</button>
        </div>
      </div>
    </div>
  );
};
