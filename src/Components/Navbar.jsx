import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={'navbar navbar-dark navbar-expand-lg bg-primary'}>
            <div className={'navbar-brand'}>
                Note-app
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to='/' exact className="nav-link" >Main Page</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' className="nav-link" exact>About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar