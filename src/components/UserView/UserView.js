import React, {useContext} from 'react'
import { UserContext } from '../../context/UserContext';
import './User.css';
import UserTile from './UserTile';
import OtherUsers from './OtherUsers';

export default function UserView(props) {
    const users = useContext(UserContext);
    let user = users.get(props.userId);
    

    return (
        <div id="users-view-container">
            <h2>User View</h2>
            <div id="user-container">
                <div className="current-user">
                    <UserTile user={user}/>
                </div>
                <div className="other-users">
                  <OtherUsers currentUser={user} users={users}/>
                </div>
            </div>
        </div>
    )
}