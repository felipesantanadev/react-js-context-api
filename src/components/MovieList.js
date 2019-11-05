import React, {useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from '../contexts/MovieContext';

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return(
        <div className="column">
            <div className="columns">
                {
                    movies.map((movie, index) => (
                        <div className="column">
                            <Movie key={`movie-${index}`} movie={movie} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default MovieList;