import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
import Post from './Post';
import './style.css'; 

const Postlist = function ({posts, title, remove, edit}) {
    if(!posts.length){
        return(<h1 className='none-post'>Posts not found!</h1>)
    }

    return(
        <div style={{border:'1px solid black', padding:'5px',margin: '20px 0'}}>
            <h1 style={{textAlign:'center'}}>
            {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index)=>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <Post remove={remove} ide ={index} edit={edit} number={index+1} post={post}/>
                    </CSSTransition>   
                )}
            </TransitionGroup>

        </div>
    )
  

}
export default Postlist;