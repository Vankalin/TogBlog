import React from 'react';
import './App.css'; 
import { useMemo,useState, useEffect } from 'react';
import ClassCounter from './Components/Counters/ClassCounter';
import Counter from './Components/Counters/Counter';
import Postlist from './Components/Postlist';
import PostForm from './Components/PostForm';
import PostFilter from './Components/PostFilter';
import MyModal from './Components/UI/modal/MyModal';
import MyButton from './Components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PostService';
import MyLoader from './Components/UI/loader/MyLoader';

function App() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostLoading, setIsPostLoading] = useState(false)
    useEffect(() => {
      fetchPost();
    }, [])
    
    
    async function fetchPost() {
      setIsPostLoading(true);
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostLoading(false); 
     
    }


    const createPost = (newPost)=>{
      setPosts([...posts, newPost])
      setModal(false);
    }



    const removePost = (post)=>{
      setPosts(posts.filter(p=>p.id !== post.id))
    }





    return ( 
      <div className = "App" >
        {/* <Counter/>
        <ClassCounter/> */}
        <button onClick={fetchPost}>GET POST</button>
        <MyButton onClick={()=>setModal(true)}>Create post</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
        </MyModal>
        <PostFilter filter={filter} setFilter={setFilter}/>

        {isPostLoading
          ?<MyLoader/>
          :<Postlist remove={removePost} posts={sortedAndSearchedPosts} title={"Post List 1"}/>
        }        
      </div>
    );
}

export default App;