import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {
    const posts = useLoaderData()
    return (
        <div className="text-center">
            <h2>Posts : {posts.length}</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4">
                {
                    posts.map(post =><Post key={post.id} post={post}></Post>)
                }
            </div>
            
        </div>
    );
};

export default Posts;