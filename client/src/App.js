import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostIndex from './pages/PostIndex/PostIndex';
import PostShow from './pages/PostShow/PostShow';
import Navbar from './components/Navbar';
import PostForm from './pages/PostForm';
import SignUpForm from './pages/Session/SignUpForm';
import LoginForm from './pages/Session/LoginForm';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/sign-up' element={<SignUpForm />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/new-post' element={<PostForm />} />
                <Route path='/post/:id' element={<PostShow />} />
                <Route path='/' element={<PostIndex />} />
            </Routes>
        </Router>
    );
}

export default App;
