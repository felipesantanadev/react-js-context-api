import React from 'react';

const Movie = ({movie}) => {

    return(
        <div>
            <h3>{movie.name}</h3>
            <small>{movie.rate}</small>
        </div>
    );
}

export default Movie;