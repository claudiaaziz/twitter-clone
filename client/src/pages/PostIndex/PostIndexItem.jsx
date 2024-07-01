import { useNavigate } from 'react-router-dom';

export default function PostIndexItem({ post }) {
    const { id, body, title, username } = post;
    const navigate = useNavigate();

    return (
        <div
            className='post-index-item'
            onClick={() => navigate(`/post/${id}`)}
        >
            <h2>{title}</h2>
            <p>{body}</p>
            <span>{username}</span>
        </div>
    );
}
