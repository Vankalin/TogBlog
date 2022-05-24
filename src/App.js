import React from 'react';
import './App.css'; 
import { useMemo,useState, useEffect } from 'react';
import Postlist from './Components/Postlist';  
import PostForm from './Components/PostForm';
import PostFormEdit from './Components/PostFormEdit';
import PostFilter from './Components/PostFilter';
import MyModal from './Components/UI/modal';
import MyButton from './Components/UI/button/';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import MyLoader from './Components/UI/loader';
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
      console.log(posts)
    }


    const showModalEdit =(post,ide)=>{
      setModalEdit(true);
      setPostEdit({...post, ide:ide})
      console.log(postEdit)
    }

    const editPost=(post)=>{
      const locPosts = [...posts]
      locPosts[post.ide] = post;     
      setPosts(locPosts);
      setModalEdit(false);
    }
    return ( 
      <div className = "App" >
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
        <hr style={{margin:'20px 0'}}/>
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

