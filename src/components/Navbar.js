import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Grey from "@mui/material/colors/grey";
// import { Button } from "@mui/material";
// Import css files
import "./style/global.css";

function Navbar() {
  return (
    <>
      {/* Navbar for sm device */}
      <nav className="z-50 w-full h-12 bg-neutral-800 md:hidden fixed bottom-0 rounded-tl-lg rounded-tr-lg">
        <div className="grid grid-cols-4 mt-1">
          <Link className="mx-auto my-auto" to="/">
            <HomeIcon style={{ color: Grey[50] }} />
          </Link>
          <Link className="mx-auto my-auto" to="/about">
            <PeopleOutlineIcon style={{ color: Grey[50] }} />
          </Link>
          <Link className="mx-auto my-auto" to="/services">
            <ManageAccountsIcon style={{ color: Grey[50] }} />
          </Link>
          <Link className="mx-auto my-auto" to="/contact">
            <ContactMailIcon style={{ color: Grey[50] }} />
          </Link>
        </div>
      </nav>

      {/* Navbar for lg device */}
      <nav className="w-4/5 lg:w-3/5 mx-auto hidden md:block -mb-20">
        <div className="flex flex-row-reverse space-x-10 items-center h-20">
          <button className="font-small hover:bg-white text-gray-200 hover:text-black margin-l border-inherit border px-4 py-2 rounded-md transition-all">
            PARTNER WITH US
          </button>
          {/* <Button
            className="font-medium text-gray-200 hover:text-gray-300 margin-l border-inherit"
            variant="outlined"
            style={{ color: Grey[50], outline: Grey[50] }}
          >
            PARTNER WITH US
          </Button> */}
          <Link
            className="font-medium text-gray-200 hover:text-gray-300 mr-20"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="font-medium text-gray-200 hover:text-gray-300"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="font-medium text-gray-200 hover:text-gray-300"
            to="/about"
          >
            About
          </Link>
          <Link
            className="font-medium text-gray-300 hover:text-gray-300"
            to="/"
          >
            Home
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
