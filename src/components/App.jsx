import { fetchTrending, fetchDetails } from 'servise/api';
import { useState, useEffect } from 'react';
import { Trending } from 'components/trending/Trending';

export const App = () => {
  const [trendingFilm, setTrendingFilm] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const { results } = await fetchTrending();
      const data = results.map(({ title, id }) => {
        return { title, id };
      });
      setTrendingFilm(data);
    };

    getFilms();
  }, []);

  console.log(trendingFilm);

  fetchDetails(616037).then(data => {});

  const loadFilms = trendingFilm.length !== 0;

  return <div>{loadFilms && <Trending trendingFilm={trendingFilm} />}</div>;
};
