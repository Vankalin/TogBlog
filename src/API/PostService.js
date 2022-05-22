import axios from 'axios';
import  { Component } from 'react'

export default class PostService extends Component {
  static async getAll(limit,page){
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                params:{
                    _limit:limit,
                    _page:page
                }
            });
            response.data.map((post)=>{
                post.title=post.title.charAt(0).toUpperCase() + post.title.slice(1);
                post.body=post.body.charAt(0).toUpperCase() + post.body.slice(1);
            })
            return response; 
    }
}
