import React from "react";

export default function ProjectCard({ projectID, projectImg, projectTitle, projectDesc, projectGit }) {
    return (
        <div className="box-content w-full h-48 bg-center bg-contain" style={{ backgroundColor: "rgba(0, 0, 0, 0.30)", backgroundImage: `url(${projectImg})`, backgroundRepeat: 'no-repeat'}}>
            
        </div>
    )
}