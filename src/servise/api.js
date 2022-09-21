import axios from 'axios';

const API_KEY = '67a62bc434630b82171cecbc8fd88b0b';
const BASE_URL = 'https://api.themoviedb.org';

export const fetchTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`
  );

  return response.data;
};

export const fetchDetails = async (movie_id) => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  )
  return response.data
}
