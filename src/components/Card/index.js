import React from "react";
//import cover_img_01 from "../../assets/images/menu_logo/cover_img_01.png";
const Card = (props) => {
    return (
        <div class="flex flex-shrink-0">
          <a
            href=""
            class="relative transform hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <button
              class="absolute uppercase z-10 ml-2 px-1 bg-btnSmColor rounded-full mt-44"
            >
              {props.name}
            </button>
            <h2 class="absolute z-10 w-52 mt-52 text-base leading-4 pt-2">
              {props.desc}
            </h2>
            <img
              class="h-52"
              src={props.photo}
              alt="cover_img_01"
            />
          </a>
        </div>
    );
}

export default Card;