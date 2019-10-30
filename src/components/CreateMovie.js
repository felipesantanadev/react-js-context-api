import React, {useContext, useState} from 'react';
import {MoviewContext, MovieContext} from '../contexts/MovieContext';

const CreateMovie = () => {
    const [movies, setMovies] = useContext(MovieContext);
    const [name, setName] = useState('');
    const [rate, setRate] = useState(0);

    const changeName = (event) => {
        setName(event.target.value);
    }

    const changeRate = (event) => {
        setRate(event.target.value);
    }

    const update = (event) => {
        event.preventDefault();
        setMovies(prevMovies => [...prevMovies, {
            name: name,
            rate: rate
        }])
    }

    return (
        <form onSubmit={update}>
            <input type="text" onChange={changeName}/>
            <input type="text" onChange={changeRate}/>
            <button onClick={update}>Create</button>
        </form>
    );
}

export default CreateMovie;