import { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import monke from './monke.gif';

const EditPost = ({
    posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle
}) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])
    return (
        <main className="NewPost">
            {editTitle &&
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
                        <button type="submit" onClick={() => handleEdit(post.id)}>Submit edit</button>

                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Post not found</h2>
                    <p>Well, that fucking sucks.</p>
                    <p>
                        <Link to="/">Get the fuck out to the homepage.</Link>
                    </p>
                    <img alt="monke" src={monke} style={{ height: "25rem" }} />
                </>
            }
        </main>
    )
}

export default EditPost