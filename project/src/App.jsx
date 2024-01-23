import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import PostsPage from "./pages/PostsPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/posts" element={<PostsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
