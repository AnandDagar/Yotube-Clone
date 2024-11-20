import React from "react";
import "../../index.css";
import PlayVideo from "../../PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";

const Video = () => {
  return (
    <div className="play_container">
      <PlayVideo/>
      <Recommended/>
    </div>
  )
};

export default Video;
