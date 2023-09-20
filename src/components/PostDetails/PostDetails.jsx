import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    //  const {postId} = useParams();
    const navigate = useNavigate();
    const { id,title,body} = post;
    // console.log(postId)
   
    
    const handleGoBack = () =>{
        navigate(-1)

    }


    return (
        <div>
            <h3>post details about :{id} </h3>
            <p>Title : {title}</p>
            <p>body : {body}</p>
            <button onClick={handleGoBack}>Go back</button>
            
        </div>
    );
};

export default PostDetails;