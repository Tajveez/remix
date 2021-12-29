import { useParams } from "remix"

function Post() {
    const params = useParams()

    return (
        <div>
            <h2>Post {params.postId}</h2>
        </div>
    )
}

export default Post
