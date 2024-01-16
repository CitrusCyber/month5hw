import { useEffect, useState } from 'react';

const Home = ({ createdPosts }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/posts');
                const data = await response.json();

                if (Array.isArray(data.posts)) {
                    setPosts([...createdPosts, ...data.posts]);
                } else {
                    console.error('Data Posts is not an array:', data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [createdPosts]);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
