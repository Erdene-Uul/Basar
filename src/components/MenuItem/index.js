import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
    return (
        <li className="mx-4 my-6 md:my-0">
          <NavLink exact={props.exact} to={props.link}
          className=" hover:text-cyan-600 duration-400 text-sm">{props.children}</NavLink>
        </li>
    );
}
export default MenuItem;