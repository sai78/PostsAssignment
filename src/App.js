import React, { useContext } from 'react';
import './App.css';
import PostPreview from './components/PostPreview/PostPreview';
import { PostStore } from './context/PostContext';
import { UserStore } from './context/UserContext';
import { ViewStore, ViewContext } from './context/ViewContext';
import PostView from './components/PostView/PostView';
import UserView from './components/UserView/UserView';

const App = () => {
  return (
    <div className="App">
      <ViewStore>
        <UserStore>
          <PostStore>
            <MainView />
          </PostStore>
        </UserStore>
      </ViewStore>
    </div>
  );
};

const MainView = () => {
  const { view, setMainView, postIndex, userId } = useContext(ViewContext);
  return (
    <>
      <div>
        <button onClick={() => setMainView(0)}>Back</button>
      </div>
      {
        view === 0 && <PostPreview />
      }
      {
        view === 1 && <PostView postIndex={postIndex} />
      }
      {
        view === 2 && <UserView userId={userId} />
      }
    </>
  )
}

export default App;
