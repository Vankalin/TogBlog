import React from 'react';
import './style.css'; 

const Post = function (props) {

    return(
        <div>
            <div className="post">
                <div className="post__content">
                    <strong><p style={{color:'red',display:'inline'}}>{props.number})</p> {props.post.title}</strong>
                    <div className="post__text">
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <button onClick={()=>props.remove(props.post)} className="post__btn">Delete</button>
                </div>
            </div>



        </div>
        
    )
  

}
export default Post;