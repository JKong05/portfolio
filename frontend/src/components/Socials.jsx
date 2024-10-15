import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Socials() {
  return (
    <div className="flex space-x-2">
        <a href="https://github.com/JKong05" target="_blank" className="text-slate-300 hover:brightness-150 transition duration-300">
          <BsGithub size={24}/>
        </a>
        <a href="https://www.linkedin.com/in/justink-vu27" target="_blank" className="text-slate-300 hover:brightness-150 transition duration-300">
          <BsLinkedin size={24}/>
        </a>
        <a href="https://www.instagram.com/jutin_5/" target="_blank" className="text-slate-300 hover:brightness-150 transition duration-300">
          <BsInstagram size={24}/>
        </a>
    </div>
  );
}
