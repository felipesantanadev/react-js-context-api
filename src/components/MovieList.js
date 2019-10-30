import React, {useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from '../contexts/MovieContext';

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return(
        <div>
            {
                movies.map((movie, index) => (
                    <Movie key={`movie-${index}`} movie={movie} />
                ))
            }
        </div>
    );
}

export default MovieList;