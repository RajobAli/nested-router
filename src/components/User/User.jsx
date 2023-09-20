import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone} = user;

    const userStyle = {
        border: '3px solid green',
        padding:'5px',
        borderRadius:'20px',
        marginTop:'10px'
        
    
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <Link className="mr-5" to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>Click Me</Link>
        </div>
    );
};

export default User;