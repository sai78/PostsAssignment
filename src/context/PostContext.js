import React, {useState, useEffect, createContext} from 'react'
export const PostContext = createContext([])
export const PostStore = (props)=>{
    const [posts, setPost] = useState([]);
    const getPost = async ()=>{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let postsResponce = await res.json();
        setPost(postsResponce);
    };
    useEffect(() => {
        getPost();
    }, []);
    return (
        <PostContext.Provider value={posts}>
            {props.children}
        </PostContext.Provider>
    )
};