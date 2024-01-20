import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const CreatePost = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postCreated, setPostCreated] = useState(false);

    const handleCreatePost = async () => {
        try {
            const response = await fetch('https://dummyjson.com/posts/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: postTitle,
                    userId: 5,
                })
            });

            if (!response.ok) {
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
