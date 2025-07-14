import React from "react";
import { useParams } from "react-router-dom";
import { ViewPractica } from "../../components/coursesView/PracticaView";
import { Navbar } from "../../components/navbar/Navbar";
import "./practicaPage.css"

export const PracticaPage = () => {
    const { courseName } = useParams();

    return (
        <div>
            <Navbar />
            <ViewPractica courseName={courseName} />
        </div>
    );
};
