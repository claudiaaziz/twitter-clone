import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsIndex from './components/PostIndex';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PostsIndex />} />
            </Routes>
        </Router>
    );
}

export default App;
