import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-4">
                <Link to="/" className="navbar-brand">Lista</Link>
            </nav>
        </>
    )
}

export default TopNav;
