// pages/tallerPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { ViewTaller } from "../../components/coursesView/TallerView";
import "./tallerPage.css";
import { Navbar } from "../../components/navbar/Navbar";

export const TallerPage = () => {
    const { courseName } = useParams();

    return (
        <div>
            <Navbar />
            <ViewTaller courseName={courseName} />
        </div>
    );
};
