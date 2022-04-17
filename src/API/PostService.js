import axios from 'axios';
import  { Component } from 'react'

export default class PostService extends Component {
  static async getAll(){
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(response.data)
            response.data.map((post)=>{
                post.title=post.title.charAt(0).toUpperCase() + post.title.slice(1);
                post.body=post.body.charAt(0).toUpperCase() + post.body.slice(1);

            })
            return response.data; 
        } catch (error) {
            console.log(error)
        }
    }
}
