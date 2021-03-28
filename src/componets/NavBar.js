import React from 'react';
import {Link} from 'react-router-dom'

function NavBar(props){
    return(
    <nav id="menu">
        <Link to="/">
            Usuarios
        </Link>
        <Link to="/taks">
            Táreas
        </Link>
    </nav>
    )
}
export default NavBar;