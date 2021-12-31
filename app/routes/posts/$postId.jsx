import { useParams, useLoaderData, Link } from "remix"
import { db } from '~/utils/db.server'

export const loader = async ({ params }) => {
    const post = await db.post.findUnique({
        where: { id: params.postId }
    })

    if (!post) throw new Error('Post Not found.')
    return post
}

function Post() {
    const post = useLoaderData()

    return (
        <div>
            <div className="page-header">
                <h2>{post.title}</h2>
                <Link to="/posts" className="btn">Back</Link>
            </div>
            {new Date(post.createdAt).toLocaleString()}
            <div className="page-content">{post.body}</div>
        </div>
    )
}

export default Post
