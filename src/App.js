import './App.css';
import { BrowserRouter, Link, Outlet, useRoutes,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import CourseSection from './pages/courses-section/CourseSection';
import PageNotFound from './components/pagenotfound/PageNotFound';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses/:course" element={<CourseSection/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
