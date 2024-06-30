import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CommentsSection({ postId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:5006/comments/${postId}`)
            .then((res) => setComments(res.data));
    }, [postId]);

    const createComment = () => {
        const comment = { body: newComment, PostId: postId };

        axios.post('http://localhost:5006/comments', comment).then((res) => {
            setComments((prev) => [...prev, res.data]);
            setNewComment('');
        });
    };

    return (
        <div className='comments-section'>
            <div className='add-comment-div'>
                <input
                    type='text'
                    placeholder='Comment'
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={createComment}>Comment</button>
            </div>

            <div className='comments-div'>
                {comments.map((comment) => (
                    <div key={comment.id}>{comment.body}</div>
                ))}
            </div>
        </div>
    );
}
