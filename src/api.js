import axios from "axios";

const BASIC_URL = 'https://api.themoviedb.org/';
const API_KEY = '1a30358632b0edf3e9bcfce3a729c959';

const trending = '3/trending/movie/day';
const search = '3/search/movie';
const movieDetails = '3/movie/';


export const apiTrending = async () => {
    const response = await axios.get(`${BASIC_URL + trending}?api_key=${API_KEY}`);
    return response.data.results;

};

export const apiSearch = async (query) => {
    const response = await axios.get(`${BASIC_URL + search}?api_key=${API_KEY}&query=${query}`);
    return response.data.results;

};

export const apiMovieDetails = async (movieId) => {
    const response = await axios.get(`${BASIC_URL + movieDetails + movieId}?api_key=${API_KEY}`);
    return response.data;

};

export const apiMovieCredits = async (movieId) => {
    const response = await axios.get(`${BASIC_URL + movieDetails + movieId}/credits?api_key=${API_KEY}`);
    return response.data.cast;

};

export const apiMovieReviews = async (movieId) => {
    const response = await axios.get(`${BASIC_URL + movieDetails + movieId}/reviews?api_key=${API_KEY}`);
    return response.data.results;

};





