import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostIndex from './components/PostIndex';
import PostShow from './components/PostShow';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/new-post' element={<PostForm />} />
                <Route path='/post/:id' element={<PostShow />} />
                <Route path='/' element={<PostIndex />} />
            </Routes>
        </Router>
    );
}

export default App;
