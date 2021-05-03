import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./components/Home/Home"
// import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import SinglePost from "./components/SinglePost/SinglePost"
import Posts from "./components/Posts/Posts"
import Project from "./components/Project/Project"
// import './App.css';

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Switch>
          <Route component={Home} path='/' exact/>
          <Route component={About} path='/about' />
          <Route component={SinglePost} path="/post/:slug" />
          <Route component={Posts} path='/post' />
          <Route component={Project} path='/project' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
