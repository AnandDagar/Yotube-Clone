import React from "react";
import menu from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";
const Navbar = ({setSidebar}) => {
  return (
    <>
      <nav className="flex-div p-6 sticky top-0 shadow-md z-50 bg-white">
        <div className="left-side_menu flex items-center gap-9">
          <div className="toggle_navbar">
            <img className="w-8" src={menu} alt="" onClick={()=> setSidebar(prev => prev === false ? true : false )}/>
          </div>
          <Link to="/" className="logo_section">
            <img className="w-[150px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="center_menu">
          <div className="search_wrapper">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="right_side_menu flex gap-5">
          <img src={upload_icon} alt="" />
          <img src={more_icon} alt="" />
          <img src={notification_icon} alt="" />
          <img className="rounded-[50%]" src={profile_icon} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
