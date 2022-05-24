import React from 'react'
import { useState } from 'react'
import MyButton from './UI/button'
import MyInput from './UI/input'


 const PostForm = ({create}) => {
   
    const [postText, setPostText] = useState({title:'', body:''})


    const addNewPost = (e)=>{
        e.preventDefault()
        const newPost ={
            ...postText, id:Date.now()
        }
        create(newPost);
        setPostText({title:'', body:''});
      }
  return (
    <form>
        <MyInput 
          value={postText.title}
          onChange={e=>setPostText({...postText, title: e.target.value})}
          type="text" 
          placeholder="Post name"
        />
        <MyInput 
          value={postText.body}
          onChange={e=>setPostText({...postText, body: e.target.value})}
          type="text" 
          placeholder="Post descr"
        />
        <div style={{display: 'flex',justifyContent: 'center'}}>
          <MyButton onClick ={addNewPost}>Create post</MyButton>
        </div>
        
        
    </form>
  )
}
export default PostForm;