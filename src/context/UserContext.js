import React, { useState, useEffect, createContext } from 'react';
export const UserContext = createContext([]);
export const UserStore = (props) => {
    const [users, setUser] = useState(new Map());
    const getUsers = async () => {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let usersResponce = await res.json();
        let userMap = new Map();
        usersResponce.forEach(user => {
            userMap.set(user.id, user);
        });
        setUser(userMap);
    };
    useEffect(() => {
        getUsers();
    }, [])
    return (
        <UserContext.Provider value={users}>
            {props.children}
        </UserContext.Provider>
    )
};