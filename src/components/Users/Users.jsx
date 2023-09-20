import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'



const Users = () => {
    const users = useLoaderData();
  
    return (
        <div className="text-center">
            <h3>Our Users : {users.length}</h3>
            <p>Good users of this website</p>
            <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 items-center justify-center">
                {
                   users.map(user =><User key={user.id} user={user}></User>)
                }
            </div>
            
        </div>
    );
};

export default Users;