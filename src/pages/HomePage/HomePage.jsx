import { useState, useEffect } from 'react';
import { Trending } from 'components/trending/Trending';
import { fetchTrending } from 'servise/api';

export const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    fetchTrending().then(setTrendingFilms);
  }, []);

  return (
    <>
      <div>
        <Trending trendingFilms={trendingFilms} />
      </div>
    </>
  );
};
