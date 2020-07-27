export const mapPostToUser = (users, posts)=>{
    let userMap = new Map();
    users.forEach(user => {
        userMap.set(user.id, user);
    });

    let postsResponce = [];
    posts.forEach((post)=>{
        let user = userMap.get(post.userId);
        let temp = {...post, username: user && user.username}
        postsResponce.push(temp);
    });
   return postsResponce;
};