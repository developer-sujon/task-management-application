//External Lib  imports
import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsBarChart, BsEnvelope } from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import {
  MdCastForEducation,
  MdOutlineMiscellaneousServices,
  MdOutlineRateReview,
} from "react-icons/md";
import { Nav } from "react-bootstrap";

//Internal Lib  imports
import NavItem from "./NavItem";

function SideBar({ openMenu, setOpenMenu }) {
  return (
    <div className={openMenu ? "side-nav-open" : "side-nav-close"}>
      <Nav className="flex-column pt-2">
        <NavItem title="Dashboard" link="/dashboard" Icon={RiDashboardLine} />
        <NavItem title="All Task" link="/all-task" Icon={BsBarChart} />
        <NavItem title="Create Task" link="/create-task" Icon={BsEnvelope} />
        <NavItem title="New Task" link="/new-task" Icon={MdCastForEducation} />

        <NavItem
          title="Pending Task"
          link="/pending-task"
          Icon={AiOutlineFundProjectionScreen}
        />

        <NavItem
          title="Cancled Task"
          link="/cancled-task"
          Icon={MdOutlineMiscellaneousServices}
        />
        <NavItem
          title="Complate Task"
          link="/complate-task"
          Icon={MdOutlineRateReview}
        />

        <NavItem title="Profile" link="/profile" Icon={CgProfile} />
        <NavItem title="Setting" link="/setting" Icon={FiSettings} />
      </Nav>
    </div>
  );
}

export default SideBar;
