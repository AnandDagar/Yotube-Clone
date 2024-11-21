import React, { useState } from "react";
import "../../index.css";
import Sidebar from "../../Components/Navbar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({sidebar}) => {

  const [category, setCategory] = useState(0);
  return (
    <>
      <Sidebar sidebar={sidebar} category={category}  setCategory={setCategory}/>
      <div className={`container ${sidebar? "" : 'large_container'}`}>
        <Feed category={category}/>
      </div>
    </>
  );
};
 
export default Home;
