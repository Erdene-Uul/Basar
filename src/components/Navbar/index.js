import React from "react";

import Menu from "../Menu";
import Sidebar from "../Sidebar";
import logo_image from "../../assets/images/menu_logo/menu_logo.png";
import logo_image2 from "../../assets/images/menu_logo/menu_logo_02.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Navbar = (props) => {
  return (
    <nav className="w-full h-14 bg-white shadow flex fixed top-0 right-0 left-0  z-10 ">
      {/* lg:  */}

      <div className="flex justify-start items-center w-full absolute h-14 lg:flex lg:justify-between lg:items-center lg:sticky  mx-4 lg:w-96 ">
        <a href="#" className="text-2xl flex cursor-pointer">
          <div className="flex shrink-0 ">
            <img className="h-10" src={logo_image} />
          </div>

          <div className="flex shrink-0">
            <img className="h-10 pl-2 " src={logo_image2} alt="" />
          </div>
        </a>
      </div>

      <Menu />
      {/*  */}
      <ul className="lg:flex  items-center px-16 ">
        <button className="bg-blueMain text-white duration-500 hover:bg-sky-700 rounded-3xl text-sm font-Roboto relative mr-4 lg:flex lg:visible hidden   ">
          <div className="h-9 w-9 bg-sky-600 flex items-center justify-center rounded-full">
            <FontAwesomeIcon
              icon={solid("cart-shopping")}
              size="1x"
              color="white"
            />
          </div>

          <span className="px-4 mt-2">ДЭЛГҮҮР</span>
        </button>

        <button className="bg-btnOrange text-white duration-500 px-4 py-2 mx-4 hover:bg-orange-700 rounded-3xl text-sm font-Roboto lg:flex lg:visible hidden  ">
          НЭВТРЭХ
        </button>

        {/* <button className=" text-zinc-500 hover:text-zinc-800 cursor-pointer z-50 absolute ml-24 md:invisible">
          <FontAwesomeIcon
            icon={solid("magnifying-glass")}
            size="2x"
            color="#71717A"
          />
        </button> */}
        <Sidebar/>
      </ul>
    </nav>
  );
};
export default Navbar;
