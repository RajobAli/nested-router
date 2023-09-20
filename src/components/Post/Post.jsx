
import { Link, useNavigate } from "react-router-dom";
const Post = ({post}) => {
    const {id,title,body} = post;
    const navigate = useNavigate();

    const postStyle = {
        border: '3px solid green',
        padding:'5px',
        borderRadius:'20px',
    
    }
    const handleShowDetail = () =>{
        navigate(`/post/${id}`)

    }
    return (
        <div style={postStyle}>
            <h3>Post of id : {id}</h3>
            <p>Post of title : {title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
            
        </div>
    );
};

export default Post;