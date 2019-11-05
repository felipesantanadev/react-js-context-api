import React from 'react';

const Movie = ({movie}) => {

    return(
        <div className="card">
            <div class="card-image">
                <figure class="image is-4by5">
                    <img src={movie.url} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-6">{movie.name}</p>
                <p class="subtitle is-6">Authors: {movie.creator}</p>
                <small>Rate: {movie.rate}</small>
            </div>
        </div>
    );
}

export default Movie;