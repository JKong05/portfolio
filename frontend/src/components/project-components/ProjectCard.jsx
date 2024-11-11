import React from "react";
import { NavLink } from "react-router-dom";

export default function ProjectCard({ projectID, projectImg, projectTitle, projectDesc, projectGit }) {
    return (
        <div className="group flex flex-col justify-end box-content w-full h-48 bg-center bg-cover" style={{ backgroundColor: "rgba(0, 0, 0, 0.30)", backgroundImage: `url(${projectImg})`, backgroundRepeat: 'no-repeat'}}>
            <div className="flex flex-row w-full bg-black bg-opacity-70 justify-between px-1">
                <div>{projectTitle}</div>
                <div className="hidden group-hover:flex group-hover:underline hover:decoration-sky-500 hover:text-sky-500"><NavLink>Read More</NavLink></div>
            </div>
        </div>
    )
}