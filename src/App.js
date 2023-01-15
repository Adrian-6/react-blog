import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing'
import PageLayout from './PageLayout';
import Home from './Home';
import EditPost from './EditPost';
import { Route, Routes } from 'react-router-dom';

import { DataProvider } from './context/DataContext';

function App() {

  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
            <Route path="edit/:id" element={<EditPost />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}


export default App;