import react from "react";
import MenuItem from "../MenuItem";


const Sidebar = (props) => {
   
  

    return (<div className="fixed h-4/5 w-2/3 sm:w-1/4 lg:hidden bg-gray-500 top-11">
    <ul className="flex flex-col font-thin">
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
   )
}
export default Sidebar;