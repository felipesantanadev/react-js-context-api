import React from 'react';
import MovieList from './components/MovieList';
import {MovieProvider} from './contexts/MovieContext';
import CreateMovie from './components/CreateMovie';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <MovieList />
        <CreateMovie />
      </MovieProvider>
    </div>
  );
}

export default App;
