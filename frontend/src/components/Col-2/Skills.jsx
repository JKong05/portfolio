import React from "react";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiCsharp,
  SiCplusplus,
  SiVisualstudiocode,
  SiGit,
  SiPostman,
  SiFigma,
} from "react-icons/si";

export default function Skills() {
  return (
    <>
      <div className="flex flex-col px-2.5 mt-6 font-semibold">
        <div>Technical Skills</div>
        <div className="flex flex-col font-normal items-start">
          <div className="flex flex-row flex-wrap text-[36px] mobile-L:text-[26px] md:text-[36px]">
            <FaJava className="box-content p-1 rounded-lg" />
            <FaPython className="box-content p-1 rounded-lg" />
            <FaHtml5 className="box-content p-1 rounded-lg" />
            <FaCss3Alt className="box-content p-1 rounded-lg" />
            <SiJavascript className="box-content p-1 rounded-lg" />
            <SiTypescript className="box-content p-1 rounded-lg" />
            <FaReact className="box-content p-1 rounded-lg" />
            <SiExpress className="box-content p-1 rounded-lg" />
            <SiMongodb className="box-content p-1 rounded-lg" />
            <FaNodeJs className="box-content p-1 rounded-lg" />
            <SiTailwindcss className="box-content p-1 rounded-lg" />
            <SiNextdotjs className="box-content p-1 rounded-lg" />
            <SiCsharp className="box-content p-1 rounded-lg" />
            <SiCplusplus className="box-content p-1 rounded-lg" />
            <SiVisualstudiocode className="box-content p-1 rounded-lg" />
            <SiGit className="box-content p-1 rounded-lg" />
            <SiPostman className="box-content p-1 rounded-lg" />
            <SiFigma className="box-content p-1 rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}
