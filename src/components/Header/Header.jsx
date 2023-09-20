
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
               <span>My Website</span>
    
            <nav>
             
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contract">Contract Us</Link>
                <Link to="/users">Users</Link>
                {/* <a href="/">Home</a><a href="/about">About</a><a href="/contract">Contract Us</a> */}
            </nav>
            
        </div>
    );
};

export default Header;