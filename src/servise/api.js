import axios from 'axios';

const API_KEY = '1f2d7fc7209a3cc852325c2be14de280';
const BASE_URL = 'https://api.themoviedb.org';

export const fetchTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&language=uk-UA`
  );

  return response.data.results;
};

export const fetchDetails = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${movie_id}?api_key=${API_KEY}&language=uk-UA`
  );

  return response.data;
};

export const fetchCast = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=uk-UA`
  );

  return response.data.cast;
};

export const fetchReviews = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=uk-UA&page=1`
  );

  return response.data.results;
};

export const fetchSearch = async query => {
  const response = await axios.get(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=uk-UA&query=${query}&page=1&include_adult=false`
  );

  return response.data.results;
};
