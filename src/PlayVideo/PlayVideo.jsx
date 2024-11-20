import React from "react";
import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import user_profile from "../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play_video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best YouTube Channel To Learn Web Devlopment</h3>
      <div className="play_video_info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
            <img src={dislike} alt="" />2
            <img src={share} alt="" />
            Share
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vide_discription">
        <p>Channel that makes leraning Easy</p>
        <p>Subscribe GreactStack to Watch More Tutorials on Web Devlopment</p>
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nickolsan <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              eligendi quasi provident dolore exercitationem culpa omnis
              repudiandae doloremque consequuntur obcaecati.
            </p>
            <div className="comment_action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nickolsan <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              eligendi quasi provident dolore exercitationem culpa omnis
              repudiandae doloremque consequuntur obcaecati.
            </p>
            <div className="comment_action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nickolsan <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              eligendi quasi provident dolore exercitationem culpa omnis
              repudiandae doloremque consequuntur obcaecati.
            </p>
            <div className="comment_action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nickolsan <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              eligendi quasi provident dolore exercitationem culpa omnis
              repudiandae doloremque consequuntur obcaecati.
            </p>
            <div className="comment_action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
