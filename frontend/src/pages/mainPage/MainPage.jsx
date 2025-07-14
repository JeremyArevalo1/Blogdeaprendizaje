import React from "react";
import { useCourses } from "../../shared/hooks/useCoursesView";
import { CardTaller } from "../../components/courses/TallerCourse";
import {CardTecnologia} from "../../components/courses/TecnologiaCourse"
import { CardTics } from "../../components/courses/TicsCourse";
import "./MainPage.css";

export const MainPage = () => {
  const { courses, loading, error } = useCourses();

  if (loading) return <p>Cargando cursos...</p>;
  if (error) return <p>Error: {error}</p>;

  const normalize = str => str.toLowerCase().replace(/[^\w\s]/gi, "");

  const taller = courses.find(c => normalize(c.courseName).includes("taller"));
  const tecnologia = courses.find(c => normalize(c.courseName).includes("tecnologia"));
  const practica = courses.find(c => normalize(c.courseName).includes("practica"));


  return (
    <div className="main-container">
      <header className="main-header">
        <h1 className="header-title-main">Blog de Aprendizaje Orientado a Informática</h1>
        <p className="header-subtitle-main">Explora nuestras áreas de conocimiento especializado</p>
      </header>
      <div className="cards-container">
        {taller && <CardTaller course={taller} />}
        {tecnologia && <CardTecnologia course={tecnologia} />}
        {practica && <CardTics course={practica} />}
      </div>
    </div>
  );
};
