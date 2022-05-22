import React from 'react';
import './App.css'; 
import { useMemo,useState, useEffect } from 'react';
import ClassCounter from './Components/Counters/ClassCounter';
import Counter from './Components/Counters/Counter';
import Postlist from './Components/Postlist';  
import PostForm from './Components/PostForm';
import PostFormEdit from './Components/PostFormEdit';
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
    const [modalCreate, setModalCreate] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [postEdit, setPostEdit] = useState({title:'', body:''});


  
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
      setModalCreate(false);
    }



    const removePost = (post)=>{
      setPosts(posts.filter(p=>p.id !== post.id))

    }


    const showModalEdit =(post)=>{
      setModalEdit(true);
      setPostEdit(post)
      

      
    }


    const editPost=(post)=>{
      const locPosts = [...posts]
      locPosts.splice(post.id-1, 1, post);
      setPosts(locPosts);
      console.log(posts)

      console.log(locPosts)
      setModalEdit(false);
    }





    return ( 
      <div className = "App" >
        {/* <Counter/>
        <ClassCounter/> */}
        <div className='app-btns'>
          <MyButton onClick={fetchPost}>GET POST</MyButton>
          <MyButton onClick={()=>setModalCreate(true)}>Create post</MyButton>
        </div>

        <MyModal visible={modalCreate} setVisible={setModalCreate}>
          <PostForm create={createPost}/>
        </MyModal>

        <MyModal visible={modalEdit} setVisible={setModalEdit}>
          <PostFormEdit edit={editPost} postEdit={postEdit}/>
        </MyModal>

        <PostFilter filter={filter} setFilter={setFilter}/>
        {postError&&
          <h1>Error ${postError}</h1>
        }
        {isPostLoading
          ?<MyLoader/>
          :<Postlist remove={removePost} edit={showModalEdit} posts={sortedAndSearchedPosts} title={"Post List 1"}/>
        }        
      </div>
    );
}

export default App;

