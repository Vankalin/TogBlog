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
import PostService from './API/PostService';
import MyLoader from './Components/UI/loader/MyLoader';
import { useFetching } from './hooks/useFetching';
import { getPageCount } from './utils/pages';

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort:'', query:''});
    const [modal, setModal] = useState(false);
    const [totalPages,setTotalPages] = useState(0);
    const [limit,setLimit] = useState(10);
    const [page,setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPost, isPostLoading, postError] = useFetching(async()=>{
      const response = await PostService.getAll(limit, page);
      const totalCount = response.headers['x-total-count']; 
      setPosts(response.data);
      setTotalPages(getPageCount(totalCount, limit));
      
    })
    
    useEffect(() => {
      fetchPost();
    }, [])
    
    
    const createPost = (newPost)=>{
      setPosts([...posts, newPost])
      setModal(false);
    }



    const removePost = (post)=>{
      setPosts(posts.filter(p=>p.id !== post.id))
      console.log(post.id);  
      console.log(posts);

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
        {postError&&
          <h1>Error ${postError}</h1>
        }
        {isPostLoading
          ?<MyLoader/>
          :<Postlist remove={removePost} posts={sortedAndSearchedPosts} title={"Post List 1"}/>
        }        
      </div>
    );
}

export default App;