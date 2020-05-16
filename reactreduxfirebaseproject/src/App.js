import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import DashBoard from './components/dashboard/DashBoard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreatePost from './components/projects/CreateProject'
function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
      <Route exact path='/' component={DashBoard} />
      <Route path='/project/:id' component={ProjectDetails} />
      <Route path='/signin' component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/create" component={CreatePost}/>
      </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
