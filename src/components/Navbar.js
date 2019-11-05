import React, { useContext } from 'react';
import {MovieContext} from '../contexts/MovieContext';

const Navbar = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">@felipesantana.dev</a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">Movies Count: {movies.length}</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;