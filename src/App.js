import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './componants/Navbar/Navbar';
import Post from './componants/Post/Post';
import Nofound from './componants/Nofound/Nofound';
import PostDetail from './componants/PostDetail/PostDetail';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Navbar/>
            <Post/>
          </Route>
          <Route path="/post/:postId">
            <PostDetail/>
          </Route>
          <Route exact path="/">
            <Navbar/>
            <Post/>
          </Route>
          <Route path="*">
            <Nofound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
