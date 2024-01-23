import React, { useState, useEffect } from 'react';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/posts?limit=${postsPerPage}&skip=${(currentPage - 1) * postsPerPage}`);
                const data = await response.json();

                const postsArray = Array.isArray(data) ? data : data.posts || [];

                setPosts(postsArray);
            } catch (error) {
                console.error('Ошибка в обработке данных:', error);
            }
        };

        fetchData();

        return() => {

        }
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span> Page {currentPage} </span>
                <button onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PostsPage;
