import axios from 'axios';
import { useEffect, useState } from 'react';
import PostIndexItem from './PostIndexItem';

export default function PostIndex() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5006/posts')
            .then((res) => setPosts(res.data));
    }, []);

    return (
        <div className='post-index'>
            {posts.map((post) => (
                <PostIndexItem post={post} key={post.id} />
            ))}
        </div>
    );
}
