import React, {useContext, useState} from 'react';
import {MoviewContext, MovieContext} from '../contexts/MovieContext';

const CreateMovie = () => {
    const [movies, setMovies] = useContext(MovieContext);
    const [name, setName] = useState('');
    const [rate, setRate] = useState(0);
    const [url, setUrl] = useState('');

    const changeName = (event) => {
        setName(event.target.value);
    }

    const changeRate = (event) => {
        setRate(event.target.value);
    }

    const changeUrl = (event) => {
        setUrl(event.target.value);
    }

    const update = (event) => {
        event.preventDefault();
        setMovies(prevMovies => [...prevMovies, {
            name: name,
            rate: rate,
            url: url
        }]);
    }

    return (
        <form onSubmit={update} className="column is-one-quarter">
            <div className="field">
                <label class="label">Name</label>
                <div class="control">
                    <input type="text" className="input" onChange={changeName}/>
                </div>
            </div>
            <div className="field">
                <label class="label">Movie Rate</label>
                <div class="control">
                    <input type="text" className="input" onChange={changeRate}/>
                </div>
            </div>
            <div className="field">
                <label class="label">Url</label>
                <div class="control">
                    <input type="text" className="input" onChange={changeUrl}/>
                </div>
            </div>
            <button onClick={update} className="button is-primary">Create</button>
        </form>
    );
}

export default CreateMovie;