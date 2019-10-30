class MovieService {
    movies = [{
        name: 'Star Wars Episode I',
        rate: 9.5,
        url: '',
        creator: 'George Luccas'
    }, {
        name: 'Star Wars Episode II',
        rate: 9.7,
        url: '',
        creator: 'George Luccas'
    }, {
        name: 'Star Wars Episode III',
        rate: 10,
        url: '',
        creator: 'George Luccas'
    }, {
        name: 'Harry Potter and the Philosofer Stone',
        rate: 10,
        url: '',
        creator: 'J.K Rowling'
    }];

    async getMovies() {
        return this.movies;
    }
}

export default MovieService;