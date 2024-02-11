import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-end items-center fixed top-0 left-0 right-0 bg-gray-800 p-4">
      <ul className="flex justify-end items-center w-full max-w-screen-xl mx-auto">
        <li className="p-2 m-2">
          <Link className="font-medium text-xl text-white" to="/">
            Home
          </Link>
        </li>
        <li className="p-2 text-xl m-2 font-medium text-white">About us</li>
        <li className="p-2 text-xl m-2 font-medium text-white">Contact</li>
      </ul>
    </div>
  );
};

export default Header;
