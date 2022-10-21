import { fetchDetails } from 'servise/api';
import { useState, useEffect } from 'react';
import { Film } from 'components/film/Film';
import { useParams } from 'react-router-dom';
import { Info } from 'components/info/Info';
import { Loading } from 'components/loading.style';
import { NotFound } from 'components/NotFound/NotFound';

const FilmDetailsPage = () => {
  const { movieId } = useParams();

  const [movie_id] = useState(movieId);
  const [trendingFilm, setTrendingFilm] = useState({});
  const [genresFilm, setGenresFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      fetchDetails(movie_id).then(e => {
        setGenresFilm(e.genres);
        setTrendingFilm(e);
      });
    } catch (e) {
      setTrendingFilm(null);
    } finally {
      setIsLoading(true);
    }
  }, [movie_id]);

  return (
    <>
      {isLoading ? (
        <>
          {trendingFilm.homepage ? (
            <>
              <Film trendingFilm={trendingFilm} genresFilm={genresFilm} />
              <Info />
            </>
          ) : (
            <NotFound />
          )}
        </>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </>
  );
};

export default FilmDetailsPage;
