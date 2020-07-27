import React, {useContext} from 'react';
import './PostPreview.css';
import { ViewContext } from '../../context/ViewContext';

const PostPreviewTile = (props)=>{
    const {view, setMainView} = useContext(ViewContext);

    return (
        <div className="post-preview" onClick={(e)=>{
            e.stopPropagation();
            console.log("post");
            setMainView(1, props.index)
        }}>
            <div className="post-title">
                <p>Post Title: {props.post.title}</p>
            </div>
            <div className="post-user">
                <span onClick={(e)=>{
                    console.log(e)
                    e.stopPropagation();
                    console.log("users");
                    setMainView(2, props.post.userId)
                }}>UserName: {props.post.username}</span>
            </div>
        </div>
    )
};

export default PostPreviewTile;
