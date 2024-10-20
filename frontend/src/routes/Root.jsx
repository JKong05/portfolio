import React from "react";
import Profile from "../assets/justin.jpeg";
import { US, KR } from "country-flag-icons/react/3x2";
import { IoSchoolOutline } from "react-icons/io5";
import { TbCat } from "react-icons/tb";

export default function Root() {
  return (
    <>
      <div className="flex mx-4">
        <div className="grid grid-cols-2 mobile-L:grid-cols-[0.25fr_1fr] sm:grid-cols-[0.5fr_2fr_1fr] md:grid-cols-[0.5fr_1fr_1fr] lg:grid-cols-[0.5fr_1.5fr_1fr] gap-4">
          {/** this is the spotify API element */}
          <div className="col-span-2 order-1 sm:col-span-1 sm:order-3 pt-2">
            <div className="text-2xl text-left flex items-center">
              Level{" "}
              <div className="border-2 border-rose-700 rounded-full ml-2 w-8 h-8 flex items-center justify-center">
                <span className="text-xl">19</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-start mt-3">
              <a href="mailto: justin.i.kong@vanderbilt.edu">
                <button className="box-content py-1 px-2 bg-button-color font-semibold text-slate-200 rounded hover:brightness-150 transition duration-150 mr-1">
                  Message
                </button>
              </a>
              <a href="https://www.vanderbilt.edu/" target="_blank">
                <button className="box-content p-2 bg-button-color rounded hover:brightness-150 transition duration-150 mr-1">
                  <IoSchoolOutline />
                </button>
              </a>
            </div>
          </div>
          <div className="profile-picture box-content p-1 h-40 w-40 lg:ml-3 xs:h-48 xs:w-48 order-2 sm:order-1">
            <img
              src={Profile}
              alt="profile picture"
              className="relative h-full w-full object-cover z-1"
            />
          </div>
          <div className="text-3xl xs:pt-2 ml-8 mobile-M:ml-4 mobile-L:ml-1 xs:ml-3 sm:ml-2.5 md:ml-1.5 lg:ml-6 xl:ml-3 order-3 sm:order-2">
            <div className="text-base mb-0.5 mobile-M:text-2xl mobile-L:text-3xl xs:mb-2">
              Justin Kong
            </div>
            <div className="flex items-center flex-wrap">
              <US className="w-2 h-2 mobile-L:w-4 mobile-L:h-4 mr-1" />
              <KR className="w-2 h-2 mobile-L:w-4 mobile-L:h-4 mr-1" />
              <p
                className="text-[0.5rem] mobile-L:text-xs text-slate-300"
                style={{ lineHeight: "0.75rem" }}
              >
                South Carolina | Tennessee
              </p>
            </div>
            <div className="text-[0.5rem] leading-3 mt-1 mobile-M:mt-6 xs:text-sm mobile-L:mt-6 xs:mt-10 mobile-L:leading-4">
              My name is Justin and I am student at Vanderbilt University
              studying{" "}
              <span className="text-green-600 bg-black">Computer Science</span>{" "}
              and <span className="text-sky-500">Public Health</span>! I am
              particularly interested in the intersection of technology and
              healthcare.
            </div>
          </div>
          <div className="col-span-2 row-span-2 order-4 xs:mt-5 pr-2">
            <div
              className="box-content h-screen w-full order-2 rounded"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
            >
              <div className="flex justify-between items-center w-full bg-custom-gradient px-2 py-2 font-medium">
                <div>Recent Activity</div>
                <div>Updated: October 2024</div>
              </div>
            </div>
          </div>
          <div className="order-5 row-span-2 xs:mt-5 mr-3">
            <div
              className="box-content p-1 h-screen w-full rounded"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
            >
              Currently listening
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
