import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ projectID, projectImg, projectTitle, projectDesc, projectLink, projectStack }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div 
                className="group flex flex-col justify-end box-content w-full h-48 bg-center bg-cover cursor-pointer" 
                style={{ backgroundColor: "rgba(0, 0, 0, 0.30)", backgroundImage: `url(${projectImg})`, backgroundRepeat: 'no-repeat'}}
                onClick={() => setIsModalOpen(true)}
            >
                <div className="flex flex-row w-full bg-black bg-opacity-70 justify-between px-1">
                    <div>{projectTitle}</div>
                    <button 
                        onClick={(e) => {
                            setIsModalOpen(true);
                        }}
                        className="hidden group-hover:block group-hover:underline hover:decoration-sky-500 hover:text-sky-500"
                    >
                        Read More
                    </button>
                </div>
            </div>

            <ProjectModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                projectID={projectID}
                projectTitle={projectTitle}
                projectDesc={projectDesc}
                projectImg={projectImg}
                projectLink={projectLink}
                projectStack={projectStack}
            />
        </>
    )
}