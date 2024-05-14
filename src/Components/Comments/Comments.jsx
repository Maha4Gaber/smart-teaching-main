import React, { useEffect, useState } from "react";
// import { comments } from './../../data';
import { BsReplyAll } from "react-icons/bs";
import ImageComp from "./../ImageComp/ImageComp";
import "./Comments.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { fetchinComments } from "../../Slices/blog/comments";

const Comments =({ blog_id ,commentfor,data}) => {
  const comments = useSelector((state) => state.Comments);
  // const [data2,setData2]=useState(data)
  // const comment = ;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  setTimeout(() => {
    console.log(comments);
  }, 1000);
  // let comments=[]
  // useEffect(() => {
  //   dispatch(fetchinComments({commentfor,blog_id}));
  //   // comments=comment
  //   // console.log(comments);
  // }, []);
  // useEffect(() => {
  //   // console.log(id);
  //   const getdata = async () => {
  //     try {
  //       await axios.get("api/v3/comments/?"+commentfor+'=' + id).then((res) => {
  //       //   console.log(res.data);
  //         setcomments(res.data);
  //       });
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   // if (!localStorage.user_data) navigate("login");
  //   // else {
  //   getdata();
  //   console.log(data2);
  //   // if(data2=='done') {getdata()}
  //   // }
  // }, []);
  return (
    <div className="comments-sec">
      <h2>(04) Comment</h2>

      {comments.map((comment) => (
        <>
          <div
            className="comment-details d-flex align-items-center justify-content-between"
            key={comment.id}
          >
            <div className="d-flex">
              <div className="comment-img">
                {/* <ImageComp src={comment.img} alt={comment.created_at.full_name}/> */}
              </div>

              <div className="comment-owner d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column justify-content-around h-100">
                  <h3>{comment.created_by.full_name}</h3>
                  <p>{comment.created_at.slice(0, 10)}</p>

                  <p>{comment.comment}</p>
                </div>
              </div>
            </div>

            <div>{/* <BsReplyAll/> */}</div>
          </div>

          {comments.replies &&
            comments.replies.map(({ img, name, date, comment }, idx) => (
              <div
                className="comment-details d-flex align-items-center justify-content-end"
                key={idx}
              >
                <div className="d-flex">
                  <div className="comment-img">
                    {/* <ImageComp src={img} alt={name}/> */}
                  </div>
                  <div className="comment-owner d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column justify-content-around h-100">
                      <h3>{comment.created_by.full_name}</h3>
                      <p>{comment.created_at.slice(0, 10)}</p>
                      <p>{comment.comment}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <BsReplyAll />
                </div>
              </div>
            ))}
        </>
      ))}
    </div>
  );
};

export default Comments;

// import React, { useEffect, useState } from 'react'
// // import { comments } from './../../data';
// import { BsReplyAll } from "react-icons/bs";
// import ImageComp from './../ImageComp/ImageComp';
// import './Comments.css'
// import axios from 'axios';

// const Comments = ({id}) => {
//     const [comments, setcomments] = useState([]);

//     useEffect(() => {
//         console.log(id);
//         const getdata = async () => {
//             try {
//                 await axios.get("api/v3/comments/?blog=" + id).then((res) => {
//                 console.log(res.data);
//                 setcomments(res.data)
//                 });
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
//         // if (!localStorage.user_data) navigate("login");
//         // else {
//           getdata();
//         // }
//       }, []);
// return (
//     <div className='comments-sec'>

//         <h2>(04) Comment</h2>

//         {comments.map((comment) =>

//         <>

//             <div className='comment-details d-flex align-items-center justify-content-between' key={comment.id}>
//                 <div className='d-flex'>
//                     <div className='comment-img'>
//                         {/* <ImageComp src={comment.img} alt={comment.created_at.full_name}/> */}
//                     </div>

//                     <div className='comment-owner d-flex justify-content-between align-items-center'>
//                         <div className='d-flex flex-column justify-content-around h-100'>
//                             <h3>{comment.created_by.full_name}</h3>
//                             <p>
//                             {comment.created_at.slice(0, 10)}
//                             </p>

//                             <p>{comment.comment}</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div>
//                     {/* <BsReplyAll/> */}
//                 </div>
//             </div>

//             {/* {reply&& reply.map(({img, name, date, comment}, idx) =>

//             <div className='comment-details d-flex align-items-center justify-content-end' key={idx}>
//                 <div className='d-flex'>
//                     <div className='comment-img'>
//                         <ImageComp src={img} alt={name}/>
//                     </div>
//                     <div className='comment-owner d-flex justify-content-between align-items-center'>
//                         <div className='d-flex flex-column justify-content-around h-100'>
//                             <h3>{name}</h3>
//                             <p>{date}</p>
//                             <p>{comment}</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div>
//                     <BsReplyAll/>
//                 </div>
//             </div>

//             )} */}
//         </>
//         )}
//     </div>
// )
// }

// export default Comments
