import { Link, useLoaderData } from "remix"

export const loader = () => {
    const data = {
        posts: [
            { id: 1, title: 'Walking on the snow', body: 'This is a test Post body' },
            { id: 2, title: 'Walking on the snow', body: 'This is a test Post body' },
            { id: 3, title: 'Walking on the snow', body: 'This is a test Post body' }
        ]
    }

    return data
}

function PostItems() {
    const { posts } = useLoaderData()
    return (
        <>
            <div className="page-header">
                <h1>Posts</h1>
                <Link to="/posts/new" className="btn">New Post</Link>
            </div>
            <ul className="posts-list">
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={post.id}>
                            <h3>{post.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default PostItems
