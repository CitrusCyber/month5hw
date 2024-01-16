import { useState } from 'react';

const CreatePost = ({ onPostCreated }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleCreatePost = async () => {
        const newPost = { id: 101, title, body };

        onPostCreated(newPost);
    };

    return (
        <div>
            <h2>Create Post</h2>
            <div>
                <label>Title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Body: </label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <button onClick={handleCreatePost}>Create Post</button>
        </div>
    );
};

export default CreatePost;
