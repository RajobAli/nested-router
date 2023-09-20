import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name,email,address,website} = user;
    console.log(user)

    return (
        <div>
            <h2>Users Name:{name}</h2>
            <h2>Users Email:{email}</h2>
            <h2>Users Address:{address.street}</h2>
            <h2>Users Website:{website}</h2>
            
        </div>
    );
};

export default UserDetails;