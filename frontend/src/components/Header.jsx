import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 mx-auto w-full bg-header-color flex items-center justify-between p-10">
      <h1>Justin Kong</h1>  
      <Nav />
    </header>
  );
}
