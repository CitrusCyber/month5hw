import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postCreated, setPostCreated] = useState(false);

    const handleCreatePost = async () => {
        try {
            const response = await axios.post('https://dummyjson.com/posts/add', {
                title: postTitle,
                userId: 5,
            });

            if (response.status !== 200) {
                new Error('Не удалось создать новый пост');
            }

            setPostCreated(true);
        } catch (error) {
            console.error('Ошибка при создании нового поста:', error.message);
        }
    };

    if (postCreated) {
        return <Navigate to="/posts" />;
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Заголовок поста"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
            <button onClick={handleCreatePost}>Создать пост</button>
        </div>
    );
};

export default CreatePost;
