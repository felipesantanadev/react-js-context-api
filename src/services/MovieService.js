class MovieService {
    movies = [{
        name: 'Star Wars Episode I',
        rate: 9.5,
        url: 'https://upload.wikimedia.org/wikipedia/pt/0/05/Star_Wars_Phantom_Menace_-_P%C3%B4ster.jpg',
        creator: 'George Luccas'
    }, {
        name: 'Star Wars Episode II',
        rate: 9.7,
        url: 'https://upload.wikimedia.org/wikipedia/pt/6/63/Star_Wars_The_Clone_Wars.jpg',
        creator: 'George Luccas'
    }, {
        name: 'Star Wars Episode III',
        rate: 10,
        url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg/250px-Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg',
        creator: 'George Luccas'
    }, {
        name: "Harry Potter and the Philosopher's Stone",
        rate: 10,
        url: 'https://images-na.ssl-images-amazon.com/images/I/815v2OuIHXL._SY445_.jpg',
        creator: 'J.K Rowling'
    }];

    async getMovies() {
        return this.movies;
    }
}

export default MovieService;