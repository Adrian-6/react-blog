import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing'
import PageLayout from './PageLayout';
import Home from './Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {

  const navigate = useNavigate();

  return (
    <Routes>
      <Route  path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="post">
          <Route index element={<NewPost />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}


export default App;