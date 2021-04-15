import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./components/Home"
import Nav from "./components/Nav"
import About from "./components/About"
import SinglePost from "./components/SinglePost"
import Posts from "./components/Posts"
import Project from "./components/Project"
// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post:slug' />
        <Route component={Posts} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
