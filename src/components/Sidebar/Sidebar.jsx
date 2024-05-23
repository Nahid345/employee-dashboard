import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../image/img1.jpg";
import { SidebarData } from "../../data/Data";
import { CiSearch } from "react-icons/ci";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
        <span>SoftyPy</span>
      </div>

      <div className="search-container">
        <CiSearch className="search-icon " />
        <input
          className="search-input"
          type="search-input"
          placeholder="search.."
          name="search"
          id="search"
        />
      </div>

      <div className="menu">
        <span>Application</span>
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <div className="icon">
                {" "}
                <item.icon />
              </div>
              <span>{item.headling}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
