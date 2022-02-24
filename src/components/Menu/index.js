import React from "react";
import MenuItem from "../MenuItem";

const Menu = (props) => {
  return (
    <div className=" hidden lg:visible lg:flex w-6/12 m-auto">
      <ul className="flex justify-between items-center relative  font-thin">
        <MenuItem exact link="/">
          Нүүр
        </MenuItem>
        <MenuItem link="/animals">Амьтад</MenuItem>
        <MenuItem link="/news">Мэдээ</MenuItem>
        <MenuItem link="/blog">Блог</MenuItem>
        <MenuItem link="/organizations">Байгууллагууд</MenuItem>
        <MenuItem link="/services">Үйлчилгэ, Зар</MenuItem>
        <MenuItem link="/first_aid">Анхны тусламж</MenuItem>
      </ul>
    </div>
  );
};
export default Menu;
