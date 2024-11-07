import React from "react";
import { NavLink } from "react-router-dom";

export default function ProjectNav() {
    return (
        <>
        <nav>
            <ul className="flex space-x-4 font-bold">
                <div className="flex box box-content border-2 border-white rounded-md w-auto items-center justify-center px-2 py-1">
                    <li>
                        <NavLink>All</NavLink>
                    </li>
                </div>
                <div className="flex box box-content border-2 border-white rounded-md w-auto items-center justify-center px-2 py-1">
                    <li>
                        <NavLink>Web Dev</NavLink>
                    </li>
                </div>
                <div className="flex box box-content border-2 border-white rounded-md w-auto items-center justify-center px-2 py-1">
                    <li>
                        <NavLink>Research</NavLink>
                    </li>
                </div>
            </ul>
        </nav>
        </>
    )
}