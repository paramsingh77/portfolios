import './App.css';
import Header from './Components/Header';
import Me from './Components/Me';
import  WorkExperience  from './Components/WorkExperience';
import CursorEffect from './Components/CursorEffect';
import Projectss from './Components/Projectss.js'
import Blog from './Components/Blog.js';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AllProjects from './Components/AllProjects.js';
import AllPosts from './Components/AllPosts.js';
// import CursorEffect from './Components/CursorEffect';
function App() {
  return (
    <div className='app'>
      <Router>
      <CursorEffect />
      <Header/>
      <Me/>
      <WorkExperience/>
      <Projectss/>
      <Blog/>
      <Routes>
        <Route path='/projects' element={ <AllProjects/>}/>
        <Route path='/allposts' element={<AllPosts/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
