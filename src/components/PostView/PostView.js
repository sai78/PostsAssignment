import React, {useEffect, useContext, useState} from 'react'
import {PostContext} from '../../context/PostContext';
import { UserContext } from '../../context/UserContext';
import { mapPostToUser } from '../../utility/utility';
import CommentTile from '../Comments/CommentTile';
import './PostView.css';

const PostView= (props)=>{
    const posts = useContext(PostContext);
    const users = useContext(UserContext);
    const usersPosts = mapPostToUser(users, posts);
    let currectPost = usersPosts[props.postIndex];
    let [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${currectPost.id}/comments`)
        .then(res=>{
            res.json().then(res=>setComments(res));
        })
    }, [currectPost.id]);
    
    return (
        <div id="post-container">
            <h2 className="page-title">Post View</h2>
            <div id="post-tile-container">
              <div className="post-title">
                  <b>Post Title: </b> 
                  {currectPost.title}
              </div>
              <div className="post-body">
                <b>Post Body: </b>
                {currectPost.body}
                <p>
                    <b>Username: </b>{currectPost.username}
                </p>
              </div>
              <div className="post-comment-continer">
                  {
                      comments.map((comment, index)=>{
                        return <CommentTile comment={comment} key={`comment-${index}`}/>
                      })
                  }
              </div>
            </div>
        </div>
    );
};
export default PostView;