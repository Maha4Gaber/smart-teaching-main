import React, { useEffect, useState } from "react";
import blogImg from "../../../assests/BlogDetails/Blog-Img.png";
import ImageComp from "./../../ImageComp/ImageComp";
import Calender from '../../../assests/Calender';
import Person from '../../../assests/Person';
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
  slice2 = false,
  blogId,
  blogslug,
  slug,
  id,
  detail
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  let isRTL = lang == "en" ? true : false;
  const [like, setlike] = useState(false);
  const [liked, setliked] = useState(like);

  const handelllike = async () => {
    try {
        // console.log(id);
      await axios.get("api/v3/blogs/"+id+"/press_like/").then((res) => {
        // console.log(res);
        if(res.data=='like added success..'){
            setlike(true)
            setliked(liked+1)

        }
        else
        {
            setlike(false)
            setliked(liked-1 )
        }
        // console.log(likes);
        // console.log(liked);
      });
      // console.log(liked);
    } catch (error) {
      console.error("Error fetching data:11111", error);
    }
  };
  const [htmlContent, setHtmlContent] = useState(description);
  useEffect(()=>{
            setHtmlContent(description);

      // const getdata = async () => {
      //     try {
      //         await axios.get("api/v3/blogs/"+slug).then((res) => {
      //         console.log(res.data);
      //         setliked(res.data.likes)
      //         // setblog(res.data)
      //         });
      //     } catch (error) {
      //         console.error("Error fetching data1111:", error);
      //     } 
      // };
      // if (!localStorage.user_data) navigate("login");
    
        // getdata();
      // }
      // useEffect(() => {
          // dispatch(fetchComments({commentfor:'bolg',blog_id:1}));
          // comments=comment
          // console.log(comments);
      //   }, []);

      // console.log(likes);
      // setliked(likes!== undefined ?likes:0)
    // console.log(created_at);
    
  }, [])


  return (
    <div className={`blog-content position-relative ${slice2 && "pb-4"}`}>
      {/* <ImageComp src={pic} alt= {title}/> */}
      <img className="" src={pic} alt={title} />
      <div className="blog-desc  bg-white">
        {/* <h1>{ title}</h1> */}
        <div className="blog-details pt-3 bg-white">
          <div>
            <span>
              {/* <PiUser className="icon" /> {comments}{" "} */}
            </span>
            <span>
              <AiOutlineComment className="icon" /> {comments} {t('Comments')}{" "}
            </span>
            {/* {
              liked&&(
                <span>
              <SlLike className="icon" /> {liked} Likes{" "}
            </span>
              )
            } */}
              {/* <br></br> */}
            {slice2 && (
              <>
              <Calender />
              <span>{created_at.slice(0, 10)}</span>
              </>
              
              )}
          </div>
          {/* {liked>=0&&( */}
            <div>
              <br></br>
            {/* <button onClick=
            {() => {
            handelllike()
            }}
            className={like?'liked':''}
            >
              {" "}

              <IoIosHeart className="like" />{" "}
            </button> */}
          </div>
          {/* )} */}
        <h3 className="w-100">{title}</h3>
        </div>

          { detail&& <p className="" dangerouslySetInnerHTML={{ __html: description }} ></p> }
        

        {slice2 && (
          <Link
            className="d-flex align-items-center justify-content-end darkgreen-color fw-bold"
            to={`/blogdetails/${slug}`}
          >
            {t('readMore')} <IoArrowForward className="ms-3" />
          </Link>
        )}
        {/* <Link className=' text-decoration-none ' to={`/blogdetails/${blog?.id}`}> */}
      </div>
      
      
    </div>
  );
};

export default BlogContent;
