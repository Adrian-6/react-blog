import { useParams, Link } from 'react-router-dom'
import monke from './monke.gif'
const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
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
