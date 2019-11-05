import React from 'react';
import MovieList from './components/MovieList';
import {MovieProvider} from './contexts/MovieContext';
import CreateMovie from './components/CreateMovie';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Navbar />
        <div className="container">
          <div className="columns">
            <CreateMovie />
            <MovieList />
          </div>
        </div>
      </MovieProvider>
    </div>
  );
}

export default App;
