import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Добро пожаловать :)</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/posts">Список постов</Link>
                    </li>
                    <li>
                        <Link to="/create-post">Создать пост</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
