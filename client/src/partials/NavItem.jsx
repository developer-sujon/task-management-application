//external lib import
import React from "react";

//internal lib import
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavItem({ title, link, Icon }) {
  return (
    <Nav.Item>
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? "side-bar-item-active mt-2" : "side-bar-item mt-2"
        }
      >
        <Icon className="side-bar-item-icon" />
        <span className="side-bar-item-caption">{title}</span>
      </NavLink>
    </Nav.Item>
  );
}

export default NavItem;
