import React from "react";
import "../../index.css";
import Sidebar from "../../Components/Navbar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar? "" : 'large_container'}`}>
        <Feed/>
      </div>
    </>
  );
};

export default Home;
