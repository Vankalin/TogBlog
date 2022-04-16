import React from 'react';
import Post from './Post';
import './style.css'; 

const Postlist = function ({posts, title, remove}) {
    if(!posts.length){
        return(<h1 className='none-post'>Posts not found!</h1>)
    }

    return(
        <div style={{border:'1px solid black', padding:'5px',margin: '20px 0'}}>
            <h1 style={{textAlign:'center'}}>
            {title}
            </h1>
            {posts.map((post, index)=>
                <Post remove={remove} number={index+1} post={post} key ={post.id}/>
                
            )}
        </div>
    )
  

}
export default Postlist;