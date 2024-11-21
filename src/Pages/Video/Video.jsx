import React from "react";
import "../../index.css";
import PlayVideo from "../../PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  // Destructure videoId and categoryId from useParams
  const { videoId, categoryId } = useParams();
  
  return (
    <div className="play_container">
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
};

export default Video;
