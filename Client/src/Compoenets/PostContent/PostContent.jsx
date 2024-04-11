import "../PostContent/PostContent.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";
import Comment from "../Comment/Comment";
import { useState } from "react";

const PostContent = ({ data }) => {
  const { UserId, name, img, dec } = data;
  const like = false;
  const[comment,setComment]=useState(false)
 
  return (
    <div className="PostContent">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={img} alt="avatar" />
            <div className=" Details">
              <Link
                to={`/profile/${UserId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>

        <div className="content">
          <p>{dec}</p>
          <img src={img} alt="post_Img" />
        </div>
        <div className="Info">
          <div className="items">
            {like ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            <span>12 like</span>
          </div>
          <div className="items">
            <TextsmsOutlinedIcon />
            <span
              onClick={() => {
                setComment(!comment);
              }}
            >
              12 Comment
            </span>
          </div>
          <div className="items">
            <ShareOutlinedIcon />
          </div>
        </div>
        {comment && <Comment />}
      </div>
    </div>
  );
};

export default PostContent;
