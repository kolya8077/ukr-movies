import { fetchDetails } from 'servise/api';
import { useState, useEffect } from 'react';
import { Film } from 'components/film/Film';
import { useParams } from 'react-router-dom';
import { Info } from 'components/info/Info';

export const FilmDetailsPage = () => {
  const { movieId } = useParams();

  const [movie_id] = useState(movieId);
  const [trendingFilm, setTrendingFilm] = useState([]);
  const [genresFilm, setGenresFilm] = useState([]);

  useEffect(() => {
    const getFilm = async () => {
      const detalis = await fetchDetails(movie_id);

      setGenresFilm(detalis.genres);
      setTrendingFilm(detalis);
    };

    getFilm();
  }, [movie_id]);

  return (
    <>
      <Film trendingFilm={trendingFilm} genresFilm={genresFilm} />
      <Info />
    </>
  );
};
