import { fetchDetails } from 'servise/api';
import { useState, useEffect } from 'react';
import { Film } from 'components/film/Film';
import { useParams } from 'react-router-dom';
import { Info } from 'components/info/Info';

const FilmDetailsPage = () => {
  const { movieId } = useParams();

  const [movie_id] = useState(movieId);
  const [trendingFilm, setTrendingFilm] = useState([]);
  const [genresFilm, setGenresFilm] = useState([]);

  useEffect(() => {
    fetchDetails(movie_id).then(e => {
      setGenresFilm(e.genres);
      setTrendingFilm(e);
    });
  }, [movie_id]);

  return (
    <>
      <Film trendingFilm={trendingFilm} genresFilm={genresFilm} />
      <Info />
    </>
  );
};

export default FilmDetailsPage;
