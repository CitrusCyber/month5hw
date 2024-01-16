import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Layout from './components/Layout.jsx';

const App = () => {
    const [createdPosts, setCreatedPosts] = useState([]);

    const handlePostCreated = (newPost) => {
        setCreatedPosts((prevPosts) => [...prevPosts, newPost]);
    };

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home createdPosts={createdPosts} />}/>
                    <Route path="/create" element={<CreatePost onPostCreated={handlePostCreated} />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
