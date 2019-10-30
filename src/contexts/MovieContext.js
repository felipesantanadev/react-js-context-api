import React, {useState, createContext, useEffect} from 'react';
import MovieService from '../services/MovieService';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const service = new MovieService();
        service.getMovies().then(result => {
            setMovies(result);
        });
    },[]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}