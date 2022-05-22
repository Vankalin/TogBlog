import React from 'react'
import { useState,useEffect } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'


 const PostFormEdit = ({edit,postEdit}) => {

    const [postText, setPostText] = useState({title:'', body:''})
  
    useEffect(() => {
      setPostText(postEdit)

    }, [postEdit])
    
    const editCurrentPost = (e)=>{
        e.preventDefault()
        console.log(postText)
        edit(postText)
      }
  return (
    <form>
        <MyInput 
          value={postText.title}
          onChange={e=>setPostText({...postText, title: e.target.value})}
          type="text" 
          placeholder={postText.id}
        />
        <MyInput 
          value={postText.body}
          onChange={e=>setPostText({...postText, body: e.target.value})}
          type="text" 
          placeholder="Post descr"
        />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <MyButton onClick ={editCurrentPost}>Edit post</MyButton>
        </div>
        
        
    </form>
  )
}
export default PostFormEdit;