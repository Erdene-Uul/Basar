import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ServiceList = (props) => {
  return (
    <section
      className="mt-36 w-full h-96 bg-bgServiceColor
     px-6 sm:px-40 lg:px-80   py-6 md:py-24"
    >
      <h1 className="uppercase italic font-Roboto text-blue-700 md:text-2xl font-extrabold text-center pb-4 md:pb-10">
        #Үйлчилгээ
      </h1>
      <div className="flex flex-wrap justify-around gap-14">
        <div
          className={`w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-md hover:bg-green-600 transition-all ease-in-out duration-500 cursor-pointer`}
        >
          <div className="flex justify-center items-center h-16 md:h-20">
            <FontAwesomeIcon
              className=" h-6 md:h-8 lg:h-10 xl:h-12 "
              icon={solid("headphones")}
              color="white"
            />
          </div>
          <h2 className="mt-2   text-xs  md:text-sm inline-block w-16 md:w-20 text-center">
            Үйлчилгээ
          </h2>
        </div>

        <div
          className={`w-16 h-16 md:w-20 md:h-20  bg-orange-500 rounded-md hover:bg-orange-600 transition-all ease-in-out duration-500 cursor-pointer`}
        >
          <div className="flex justify-center items-center h-16 md:h-20">
            <FontAwesomeIcon
              icon={solid("scissors")}
              className=" h-6 md:h-8 lg:h-10 xl:h-12 "
              color="white"
            />
          </div>
          <h2 className="mt-2 mr-0 md:mr-2 text-xs md:text-sm inline-block  md:w-20 text-center">
            Гоо сайхан
          </h2>
        </div>

        <div
          className={`w-16 h-16 md:w-20 md:h-20 bg-red-500 rounded-md hover:bg-red-600 transition-all ease-in-out duration-500 cursor-pointer`}
        >
          <div className="flex justify-center items-center h-16 md:h-20">
            <FontAwesomeIcon
              icon={solid("heart")}
              className=" h-6 md:h-8 lg:h-10 xl:h-12 "
              color="white"
            />
          </div>
          <h2 className="mt-2 md:mr-2 text-xs md:text-sm inline-block w-16 md:w-20 text-center">
            Тусламж
          </h2>
        </div>

        <div
          className={`w-16 h-16 md:w-20 md:h-20  bg-yellow-400 rounded-md hover:bg-yellow-500 transition-all ease-in-out duration-500 cursor-pointer`}
        >
          <div className="flex justify-center items-center h-16 md:h-20">
            <FontAwesomeIcon
              icon={solid("cart-shopping")}
              className=" h-6 md:h-8 lg:h-10 xl:h-12 "
              color="white"
            />
          </div>
          <h2 className="mt-2 md:mr-2  text-xs md:text-sm inline-block w-16 md:w-20 text-center">
            Дэлгүүр
          </h2>
        </div>

        <div
          className={`w-16 h-16 md:w-20 md:h-20 bg-violet-800 rounded-md hover:bg-violet-900 transition-all ease-in-out duration-500 cursor-pointer`}
        >
          <div className="flex justify-center items-center h-16 md:h-20">
            <FontAwesomeIcon
              icon={solid("eye")}
              className=" h-6 md:h-8 lg:h-10 xl:h-12 "
              color="white"
            />
          </div>
          <h2 className="mt-2 mr-0 md:mr-2 text-sm inline-block w-16 md:w-20 text-center">
            Асрах
          </h2>
        </div>

        <div
          className={`w-16 h-16 md:w-20 md:h-20 bg-fuchsia-700 rounded-md hover:bg-fuchsia-800 transition-all ease-in-out duration-500 cursor-pointer`}
        >
          <div className="flex justify-center items-center h-16 md:h-20">
            <FontAwesomeIcon
              icon={solid("calendar-days")}
              className=" h-6 md:h-8 lg:h-10 xl:h-12 "
              color="white"
            />
          </div>
          <h2 className="mt-2 mr-0 md:mr-2 text-sm inline-block w-16 md:w-20 text-center">
            Арга хэмжээ
          </h2>
        </div>
      </div>
    </section>
  );
};
export default ServiceList;
