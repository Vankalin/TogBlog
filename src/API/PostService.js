import axios from 'axios';
import  { Component } from 'react'

export default class PostService extends Component {
  static async getAll(){
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return response.data;
        } catch (error) {
            console.log('error')
        }
    }
}
