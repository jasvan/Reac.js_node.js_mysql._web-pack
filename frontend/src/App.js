import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ShowBlogs from './components/ShowBlogs';
import CreateBlog from './components/CreateBlog'
import UpdateBlog from './components/UpdateBlog'
// import DeleteBlog from './components/DeleteBlog'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ < ShowBlogs /> } />
          <Route path='/create' element={ < CreateBlog /> } />
          <Route path='/update/:id' element={ < UpdateBlog /> } />         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
