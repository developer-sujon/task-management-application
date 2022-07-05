//External Lib  imports
import React from "react";
import { Accordion, Nav } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import NavItem from "./NavItem";

const Submenu = ({ title, items }) => {
  return (
    <Nav.Item>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <AiOutlineEdit className="side-bar-item-icon" />
            <span className="side-bar-item-caption">{title}</span>
          </Accordion.Header>
          <Accordion.Body>
            <Nav defaultActiveKey="/home" className="flex-column">
              {items &&
                items.map((item, index) => {
                  return (
                    <NavItem
                      key={index}
                      title={item.title}
                      link={item.link}
                      Icon={item.icon}
                    />
                  );
                })}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Nav.Item>
  );
};

export default Submenu;
