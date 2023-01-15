import { useEffect, useContext, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import DataContext from "./context/DataContext";
import api from './api/posts'


const EditPost = () => {
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const { posts, setPosts } = useContext(DataContext)
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    const navigate = useNavigate();

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])

    async function handleEdit(id) {
        const datetime = format(new Date(), "MMMM dd, yyyy pp");
        const updatedPost = { id, title: editTitle, datetime, body: editBody };
        try {
            const response = await api.put(`/posts/${id}`, updatedPost)
            setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
            setEditTitle('');
            setEditBody('');
            navigate('/');
        } catch (err) {
            if (err.response) {
                //Not in 200 response range
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                //No response or other errors
                console.log(`Error: ${err.message}`);
            }
        }
    }

    return (
        <main className="NewPost">
            <>
                <h2>Edit Post</h2>
                <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="postTitle">Title:</label>
                    <input
                        id="postTitle"
                        type="text"
                        required
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <label htmlFor="postBody">Post:</label>
                    <textarea
                        id="postBody"
                        required
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)}
                    />
                    <button type="submit" onClick={() => {
                        if (editTitle && editBody) handleEdit(post.id)
                    }}>
                        Submit edit
                    </button>

                </form>
            </>
        </main>
    )
}

export default EditPost