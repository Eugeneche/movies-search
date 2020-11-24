import * as axios from 'axios';

const API_KEY = 'ee2385b3e1507413c162d500dc98115e';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
  });

export const getMoviesAPI = {
    getPopular(page) {
        return instance.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    },

    getSeries(page) {
        return instance.get(`discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&with_genres=10770`)
    },

    getFamilyMovies(page) {
        return instance.get(`discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&with_genres=10751`)
    },

    getDocumentaryMovies(page) {
        return instance.get(`discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&with_genres=99`)
    }
}

export const getSelectedMovieAPI = {
    getSelectedMovie(id) {
        return instance.get(`movie/${id}?api_key=${API_KEY}`)
    }
}

export const posterBaseURL = 'https://image.tmdb.org/t/p/w200/';

export const trailerBaseURL = 'https://www.youtube.com/watch?v=';

export const trailerAPI = {
    getTrailer(id) {
        return instance.get(`movie/${id}/videos?api_key=${API_KEY}`)
    }
}

export const movieSearchingAPI = {
    searchMovie(query) {
        return instance.get(`search/movie?api_key=${API_KEY}&query=${query}`)
    },

    getNextSearchedMovies(query, page) {
        return instance.get(`search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
    }
}

/* https://api.themoviedb.org/3/search/movie?api_key=ee2385b3e1507413c162d500dc98115e&query=terminator */
/* https://api.themoviedb.org/3/discover/movie?api_key=ee2385b3e1507413c162d500dc98115e&language=en-US&page=3&with_genres=99 

https://api.themoviedb.org/3/movie/508570?api_key=ee2385b3e1507413c162d500dc98115e 
*/