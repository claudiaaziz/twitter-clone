import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function PostShow() {
    const { id } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:5006/posts/${id}`)
            .then((res) => setPost(res.data));
    }, [id]);

    return (
        <div className='post-show'>
            <div>
                <h2>{post?.title}</h2>
                <p>{post?.body}</p>
            </div>
            <span>{post?.username}</span>
        </div>
    );
}
