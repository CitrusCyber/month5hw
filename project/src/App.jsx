import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostsList from './pages/PostsList.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Home from "./pages/Home.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/posts" element={<PostsList />} />
                <Route path="/create-post" element={<CreatePost />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
