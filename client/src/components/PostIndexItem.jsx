export default function PostIndexItem({ post }) {
    const { body, title, username } = post;
    
    return (
        <div className="post-index-item">
            <h2>{title}</h2>
            <p>{body}</p>
            <span>{username}</span>
        </div>
    );
}
