import { useEffect, useState } from 'react';
import axios from 'axios';

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/posts');
                setPosts(response.data.posts);
            } catch (error) {
                console.error('Ошибка при загрузке постов. Пожалуйста, повторите попытку позже. Подробности ошибки:', error);
                setError(error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Ошибка при загрузке постов. Пожалуйста, повторите попытку позже. Подробности ошибки: {error.message}</div>;
    }


    console.log('PostsList отрисован:', posts);

    return (
        <div>
            <h1>Список Постов</h1>
            {posts.length > 0 ? (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            ) : (
                <p>Нет доступных постов.</p>
            )}
        </div>
    );
};

export default PostsList;
