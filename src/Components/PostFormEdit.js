import React from 'react'
import { useState,useEffect } from 'react'
import MyButton from './UI/button'
import MyInput from './UI/input'
import ModalTextarea from './UI/textarea'


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
        <ModalTextarea 
          value={postText.body}
          onChange={e=>setPostText({...postText, body: e.target.value})}
          type="text" 
          placeholder="Post descr"
          rows="6"
          cols="25"
        />
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <MyButton onClick ={editCurrentPost}>Edit post</MyButton>
        </div>
        
        
    </form>
  )
}
export default PostFormEdit;