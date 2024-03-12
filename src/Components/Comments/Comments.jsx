import React from 'react'
import { comments } from './../../data';
import { BsReplyAll } from "react-icons/bs";
import ImageComp from './../ImageComp/ImageComp';
import './Comments.css'

const Comments = () => {

return (
    <div className='comments-sec'>

        <h2>(04) Comment</h2>

        {comments.map(({img, name, date, comment, reply}, idx) => 

        <>
            
            <div className='comment-details d-flex align-items-center justify-content-between' key={idx}>
                <div className='d-flex'>
                    <div className='comment-img'>
                        <ImageComp src={img} alt={name}/>
                    </div>
                    
                    <div className='comment-owner d-flex justify-content-between align-items-center'>
                        <div className='d-flex flex-column justify-content-around h-100'>
                            <h3>{name}</h3>
                            <p>{date}</p>
                            <p>{comment}</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    {/* <BsReplyAll/> */}
                </div>
            </div>

            {/* {reply&& reply.map(({img, name, date, comment}, idx) =>

            <div className='comment-details d-flex align-items-center justify-content-end' key={idx}>
                <div className='d-flex'>
                    <div className='comment-img'>
                        <ImageComp src={img} alt={name}/>
                    </div>
                    <div className='comment-owner d-flex justify-content-between align-items-center'>
                        <div className='d-flex flex-column justify-content-around h-100'>
                            <h3>{name}</h3>
                            <p>{date}</p>
                            <p>{comment}</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <BsReplyAll/>
                </div>
            </div>


            )} */}
        </>
        )}
    </div>
)
}

export default Comments