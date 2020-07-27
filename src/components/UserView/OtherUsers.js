import React, {useContext, useState} from 'react'
import { ViewContext } from '../../context/ViewContext';

const debounce = function(fn, d){
    let timer=null;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this, args);
            console.log(...args)
        }, d);
    }
}

export default function OtherUsers({users, currentUser}) {
    const {setMainView} = useContext(ViewContext);
    const [text, setText] = useState("");

    const filter = (value)=>{
        setText(value)
    }

    const filter_debounced = debounce(filter, 400);
    
    let otherUsers=[];
    for(let [id, user] of users){
        if(text && text.length!==0 && user.email.includes(text))
        {
            let tile = (
                <li key={`user-${id}`} onClick={()=>{setMainView(2, id)}}>
                    {user.email}
                </li>
            );
            otherUsers.push(tile);
        }
        else if(text && text.length)
        {
            let tile = (
                <li key={`user-${id}`} onClick={()=>{setMainView(2, id)}}>
                    {user.email}
                </li>
            );
            otherUsers.push(tile);
        }

    }

    return (
        <>
            <div className="search">
                <div className="item"><b>Search Other Users</b></div>
                <input className="item" onChange={(e)=>filter_debounced(e.target.value)} />
            </div>
            <ul className="other-user">
              {otherUsers}
            </ul>
        </>
    );
}
