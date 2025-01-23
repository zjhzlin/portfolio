import React from "react";
import MenuDropDown from "./MenuDropDown";

function Navbar() {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">My Portfolio</div>
        <MenuDropDown />
      </div>
    </header>
  );
}

export default Navbar;
