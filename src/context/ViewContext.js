import React, { useState, createContext } from 'react';
export const ViewContext = createContext([])
export const ViewStore = (props) => {
    const [view, setView] = useState(0);
    const [postIndex, setPostId] = useState(0);
    const [userId, setUserId] = useState(0);
    const setMainView = (viewId, id) => {
        if (viewId === 1) {
            id = id >= 0 ? id : postIndex;
            setPostId(id);
        }
        else if (viewId === 2) {
            id = id >= 0 ? id : userId;
            setUserId(id);
        }
        else viewId = 0;
        setView(viewId);
    }
    let mainView = {
        view,
        setMainView,
        postIndex,
        userId
    }
    return (
        <ViewContext.Provider value={mainView}>
            {props.children}
        </ViewContext.Provider>
    )
};