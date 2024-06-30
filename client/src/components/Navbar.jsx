import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to='/'>X</NavLink>
            <NavLink to='/new-post'><span>+</span></NavLink>
        </div>
    );
}
