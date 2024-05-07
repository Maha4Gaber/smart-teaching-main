import React, { useState } from "react";
import blogImg from "../../../assests/BlogDetails/Blog-Img.png";
import ImageComp from "./../../ImageComp/ImageComp";

// Icons
import { PiUser } from "react-icons/pi";
import { AiOutlineComment } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { IoIosHeart } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./BlogContent.css";
import { useTranslation } from "react-i18next";
import axios from "axios";

const BlogContent = ({
  pic,
  title,
  title_ar,
  title_en,
  created_by,
  comments,
  likes,
  description,
  description_ar,
  description_en,
  created_at,
  month,
  slice = false,
  blogId,
  id,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  let isRTL = lang == "en" ? true : false;
  const [like, setlike] = useState(false);
  const [liked, setliked] = useState(likes);
  const handelllike = async (id) => {
    try {
        // console.log(id);
      await axios.get("api/v3/blogs/"+id+"/press_like/").then((res) => {
        // console.log(res.data);
        if(res.data=='like added success..'){
            setlike(true)
            setliked(liked+1)

        }
        else
        {
            setlike(false)
            setliked(liked-1)
        }
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  return (
    <div className={`blog-content position-relative ${slice && "pb-4"}`}>
      {/* <ImageComp src={pic} alt= {title}/> */}
      <img className="" src={pic} alt={title} />
      <div className="blog-desc px-3 bg-white">
        <h1>{isRTL ? title_en : title_ar}</h1>
        <div className="blog-details bg-white">
          <div>
            <span>
              <PiUser className="icon" /> {comments}{" "}
            </span>
            <span>
              <AiOutlineComment className="icon" /> {comments} Comments{" "}
            </span>
            <span>
              <SlLike className="icon" /> {liked} Likes{" "}
            </span>
          </div>
          <div>
            <button onClick=
            {() => {
            handelllike(blogId)
            }}
            className={like?'liked':''}
            >
              {" "}

              <IoIosHeart className="like" />{" "}
            </button>
          </div>
        </div>

        {slice ? (
          <p>{desc.slice(0, 200)}...</p>
        ) : (
          <p>{isRTL ? description_en : description_ar}</p>
        )}

        {slice && (
          <Link
            className="d-flex align-items-center justify-content-end darkgreen-color fw-bold"
            to={`/blogdetails/${blogId}`}
          >
            Read More <IoArrowForward className="ms-3" />
          </Link>
        )}
        {/* <Link className=' text-decoration-none ' to={`/blogdetails/${blog?.id}`}> */}
      </div>

      <div className="blog-content-date">
        <span>{created_at.slice(8, 10)}</span>{" "}
        <span>{created_at.slice(5, 7)}</span>
      </div>
    </div>
  );
};

export default BlogContent;
