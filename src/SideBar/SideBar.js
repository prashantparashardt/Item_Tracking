import React from "react";
import "./SideBar.css";
import SideBarElement from "./SideBarElement/SideBarElement";
import {
  faTachometerAlt,
  faTruck,
  faMapMarkedAlt,
  faChartLine,
  faPeopleCarry,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  const sideBarElementsData = [
    // { id: 1, title: "", icon: "", active: "false" },
    { id: 2, title: "Dashboard", icon: faTachometerAlt, active: "true" },
    { id: 3, title: "Trips", icon: faTruck, active: "false" },
    { id: 4, title: "Tracking", icon: faMapMarkedAlt, active: "false" },
    { id: 5, title: "Analytics", icon: faChartLine, active: "false" },
    { id: 6, title: "Transporters", icon: faPeopleCarry, active: "false" },
    { id: 7, title: "Settings", icon: faCog, active: "false" },
  ];
  return (
    <div className="Sidebar">
      {sideBarElementsData.map((item) => {
        return (
          <SideBarElement
            key={item.id}
            title={item.title}
            icon={item.icon}
            active={item.active}
          />
        );
      })}
    </div>
  );
}

export default SideBar;
