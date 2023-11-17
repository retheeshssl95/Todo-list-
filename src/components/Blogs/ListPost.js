import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from '../navbar';
import { Link } from "react-router-dom";
import PostListItem from "./PostListItem";
import checkAuth from "../auth/checkAuth";

function ListPosts(){
    var [posts,setpost] = useState([]);
    function fetchPosts(){
        axios.get('https://demo-blog.mashupstack.com/api/posts').then(response=>{
            setpost(response.data)
        })
    }

    useEffect(()=>{
        fetchPosts()
    },[])

    return (<div>
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center my-4">Blog</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6 offset-3">
                    <Link to='/blog/posts/create' className="btn btn-success mb-2">Create Post</Link>
                    {posts.map(post =><PostListItem key={post.id} post={post} refresh={fetchPosts}/>)}
                    

                </div>
            </div>
        </div>

    </div>)
}

export default checkAuth(ListPosts);