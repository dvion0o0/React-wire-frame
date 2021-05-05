import React from "react";
import { useGlobalContext } from "../context";

function SideBar() {
  const { handleClick } = useGlobalContext();

  return (
    <aside className="sidebar-container">
      <button className="sidebar-btn" onClick={handleClick}>
        Click here
      </button>
    </aside>
  );
}

export default SideBar;
