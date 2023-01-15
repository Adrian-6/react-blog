import { useParams, Link } from 'react-router-dom'
import monke from './monke.gif'
import { useContext } from 'react';
import api from './api/posts';
import { useNavigate } from 'react-router-dom';
import DataContext from './context/DataContext';

const PostPage = () => {
    const navigate = useNavigate();
    const { posts, setPosts } = useContext(DataContext)
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    async function handleDelete(id) {
        try {
            await api.delete(`/posts/${id}`);
            const postsList = posts.filter(post => post.id !== id);
            setPosts(postsList);
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
        <main className="PostPage">
            <article className='post'>
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className='postDate'>{post.datetime}</p>
                        <p className='postBody'>{post.body}</p>
                        <Link to={`/post/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
                        <button className="deleteButton" onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post not found</h2>
                        <p>Well, that fucking sucks.</p>
                        <p>
                            <Link to="/">Get the fuck out to the homepage.</Link>
                        </p>
                        <img alt="monke" src={monke} style={{ height: "25rem" }} />
                    </>
                }
            </article>
        </main>
    )
};

export default PostPage;
