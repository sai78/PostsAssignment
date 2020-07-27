import React from 'react'

export default function UserTile({user}) {
    console.log(user);
    return (
        <div id="user-tile">
            <p><b>Username: </b>{user.username}</p>
            <p><b>Full Name: </b>{user.name}</p>
            <p><b>Email: </b>{user.email}</p>
            <p><b>Website: </b>{user.website}</p>
            <p><b>Company Name: </b>{user.company.name}</p>
        </div>
    )
}
