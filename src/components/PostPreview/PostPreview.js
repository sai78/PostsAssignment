import React, {useContext } from 'react'
import PostPreviewTile from './PostPreviewTile';
import { PostContext } from '../../context/PostContext';
import { UserContext } from '../../context/UserContext';
import { mapPostToUser } from '../../utility/utility';

const PostPreview = () => {
    const posts = useContext(PostContext);
    const users = useContext(UserContext);
    const usersPosts = mapPostToUser(users, posts);

    return (
        <div id="posts-preview-container">
            <h2 className="page-title">Post Preview</h2>
            <div id="post-preview-tile-container">
                {
                    usersPosts.map((post, index) => {
                        return <PostPreviewTile post={post} key={index} index={index} />
                    })
                }
            </div>
        </div>
    );
};
export default PostPreview;