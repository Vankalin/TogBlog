import React from 'react';
import './App.css'; 
import { useState } from 'react';
import { useMemo } from 'react';
import ClassCounter from './Components/Counters/ClassCounter';
import Counter from './Components/Counters/Counter';
import Postlist from './Components/Postlist';
import PostForm from './Components/PostForm';
import PostFilter from './Components/PostFilter';
import MyModal from './Components/UI/modal/MyModal';
import MyButton from './Components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';

function App() {
    const [posts, setPosts] = useState([
      {
        id:1,
        title:'Alex',
        body:'Hello world'
      },
      {
        id:2,
        title:'Bob',
        body:'Alex say hello world'
      },
      {
        id:3,
        title:'Mary',
        body:'Bob repeat. Alex\'s text'
      }
    ])

    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)





    const createPost = (newPost)=>{
      setPosts([...posts, newPost])
      setModal(false);
    }

    const removePost = (post)=>{
      setPosts(posts.filter(p=>p.id !== post.id))
    }





    return ( 
      <div className = "App" >
        <Counter/>
        <ClassCounter/>
        <MyButton onClick={()=>setModal(true)}>Create post</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
        </MyModal>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <Postlist remove={removePost} posts={sortedAndSearchedPosts} title={"Post List 1"}/>
              



        </div>
    );
}

export default App;