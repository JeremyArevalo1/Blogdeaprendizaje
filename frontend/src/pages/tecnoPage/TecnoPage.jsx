import React from "react";
import { useParams } from "react-router-dom";
import { ViewTecno } from "../../components/coursesView/TecnoView";
import { Navbar } from "../../components/navbar/Navbar";
import "./tecnoPage.css"

export const TecnoPage = () => {
    const { courseName } = useParams();

    return (
        <div>
            <Navbar />
            <ViewTecno courseName={courseName} />
        </div>
    );
};
