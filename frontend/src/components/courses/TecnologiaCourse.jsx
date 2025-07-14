import React from "react";
import { useNavigate } from "react-router-dom";

export const CardTecnologia = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tecnologiaPage/${course.courseName}`);
  };

  return (
    <div className="card card-tecnologia" onClick={handleClick}>
      <div className="card-image-tecnologia">
  <div className="image-wrapper-Tecnologia">
<img
  src="https://i.postimg.cc/d16JHhYB/Tecnolog-a-III-IN6-CV.gif"
  alt="GIF del curso Taller"
  className="card-gif-tecnolgia"
/>
  </div>
        <div className="category-tag-tecnologia">Práctico</div>
      </div>
      <div className="card-content-tecnologia">
        <div className="card-meta-tecnologia">
          <span className="duration-tecnologia">8 semanas</span>
          <span className="level-tecnologia">Fácil</span>
        </div>
        <h3 className="card-title-tecnologia">{course.courseName}</h3>
        <p className="card-text-tecnologia">{course.description}</p>
        <div className="card-footer-tecnologia">
          <span className="author-tecnologia">Por: Equipo Educativo</span>
          <button className="action-button-tecnologia">Ver detalles →</button>
        </div>
      </div>
    </div>
  );
};
