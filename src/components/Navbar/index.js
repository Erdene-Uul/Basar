import React,{usdState, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as favicon from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu";
import logo_image from "../../assets/images/menu_logo/menu_logo.png";
import logo_image2 from "../../assets/images/menu_logo/menu_logo_02.png";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Sidebar from "../Sidebar";


const Navbar = (props) => {
  const [isSideMenuOpen, setisSideMenuOpen]= useState(false);
  const showSideMenu = () =>{
    (isSideMenuOpen) ? setisSideMenuOpen(false):setisSideMenuOpen(true)
}
  return (
   
    <nav className="w-full h-14 md: bg-white shadow flex fixed top-0 right-0 left-0 z-30 ">
       <button onClick={()=>{showSideMenu()}} className="lg:hidden menu-button"> 
    {(isSideMenuOpen)?<FontAwesomeIcon
      icon={favicon.faBars}
    /> : <FontAwesomeIcon
    icon={favicon.faBars}
  />}
    </button>
    {(isSideMenuOpen) ? Sidebar(): ''}
      {/* lg:  */}
      <div className="flex justify-center items-center w-full absolute h-14 lg:flex lg:justify-between lg:items-center lg:sticky  ml-4 lg:w-96 ">
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
      <ul className="flex items-center justify-end w-full lg:w-2/6  ">
        {/* search input */}
        <div className="flex">
          <input
            className="  outline-none text-xs placeholder:text-zinc-600 placeholder:text-right caret-gray-500"
            type="search"
            placeholder="хайх"
          ></input>
          <button className=" text-zinc-500 hover:text-zinc-800 cursor-pointer visible mr-3">
            <FontAwesomeIcon
              icon={solid("magnifying-glass")}
              size="1x"
              color="#71717A"
            />
          </button>

          <div className="hidden lg:flex lg:visible lg:w-0.1  lg:h-6 bg-gray-200  mr-10"></div>
        </div>

        {/* button дэлгүүр нэвтрэх */}
        <button className="bg-blueMain text-white duration-500 hover:bg-sky-700 rounded-3xl text-xs font-Roboto relative mr-4 lg:flex hidden ">
          <div className="h-8 w-8 bg-sky-600 flex items-center justify-center rounded-full">
            <FontAwesomeIcon
              icon={solid("cart-shopping")}
              size="1x"
              color="white"
            />
          </div>

          <span className=" pr-3 pl-2 mt-2">ДЭЛГҮҮР</span>
        </button>

        <button className="bg-btnOrange text-white duration-500 px-4 py-2 mr-4 hover:bg-orange-700 rounded-3xl text-xs font-Roboto lg:flex hidden ">
          НЭВТРЭХ
        </button>
      </ul>
    

    </nav>
    
  );
};
export default Navbar;
