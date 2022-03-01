import React from "react";
import PostImgBig from "../../assets/images/niitlel_big.png";
import PostImgSmall from "../../assets/images/niitlel_small.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import css from "./btn.module.css";

const Section3 = () => {
  return (
    <section className=" w-full">
      <div className=" relative ">
        <div className=" absolute w-44 text-white font-bold text-xl mt-10 ml-4 sm:hidden">
          <span className="text-orange-500">Studying </span>Online is now much
          easier{" "}
        </div>

        <div
          className="flex sm:justify-center sm:items-center w-full h-full  absolute   
         "
        >
          <h1 className=" w-full absolute text-white invisible sm:visible sm:text-xl  md:text-3xl text-center font-medium italic   lg:text-4xl lg:font-bold  sm:mb-40 md:mb-52">
            #Блог
          </h1>
          <h1 className="w-full absolute text-center text-white invisible sm:visible sm:text-2xl sm:mb-28 font-bold  md:text-3xl lg:text-5xl ">
            Бид Амьтанд Хайртай
          </h1>

          <button className=" rounded-full py-2 px-4 bg-btnOrange text-white absolute mt-28 sm:mt-0 ml-4 hover:bg-orange-500 transition-all ease-in-out duration-300 sm:mr-52">
            Нийтлэл
          </button>
          <Link
            to={{ pathname: "https://www.youtube.com/watch?v=D_Rx4qZ8QRc" }}
            target="_blanck"
            className=" hidden lg:flex justify-center items-center   cursor-pointer
          "
            className={css.link}
          >
            <FontAwesomeIcon
              icon={solid("play")}
              size="1x"
              className="text-btnOrange hidden sm:flex
               md:visible"
            />
          </Link>

          <div className="sm:flex absolute text-white hidden sm:visible sm:ml-48">
            Бичлэг үзэх
          </div>
        </div>
        {/* sm дэлэгцнээс дээш style */}

        <img
          className="hidden lg:flex lg:visible bg-cover  bg-top bg-fixed"
          src={PostImgBig}
          alt="Cover Post Image"
        />
        <img
          className="  lg:hidden bg-cover bg-top bg-fixed"
          src={PostImgSmall}
          alt="Cover Post Image"
        />
      </div>
    </section>
  );
};

export default Section3;
