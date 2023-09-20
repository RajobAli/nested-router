
import './Header.css'
import {  NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center mt-10 '>
               <span>My Website</span>
    
            <nav>
      
               <NavLink></NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contract">Contract Us</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                {/* <a href="/">Home</a><a href="/about">About</a><a href="/contract">Contract Us</a> */}
            </nav>
            
        </div>
    );
};

export default Header;