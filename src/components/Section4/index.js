import React from "react";
import Basar_01 from "../../assets/images/basar_images/уяатай.png";
import Basar_02 from "../../assets/images/basar_images/Бөмбөгтэй.png";

const Section4 = () => {
  return (
    <div className="flex">
      <div className="w-1/2 h-96 bg-gradient-to-r from-Zaryellow1 to-Zaryellow2 relative ">
        <h1 className=" text-BigTextColor text-6xl absolute font-medium w-44 ml-24 mt-12">
          ҮРЧИЛГЭЭ & ЗАР
        </h1>
        <img src={Basar_01} className="h-64 ml-96 mt-32 " />
      </div>
      <div className="w-1/2 h-96 bg-gradient-to-r from-ZarGreen1 to-ZarGreen2 relative">
        <h1 className=" text-6xl text-BigTextColor absolute font-medium w-44 ml-24 mt-12">
          ОНЛАЙН ХУДАЛДАА
        </h1>
        <img src={Basar_02} className="h-64 ml-96 mt-32 " />
      </div>
    </div>
  );
};

export default Section4;
