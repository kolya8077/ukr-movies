import { useState, useEffect } from 'react';
import { Trending } from 'components/trending/Trending';
import { fetchTrending } from 'servise/api';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    fetchTrending().then(setTrendingFilms);
  }, []);

  const location = useLocation();

  return (
    <>
      <div>
        <Trending trendingFilms={trendingFilms} location={location} />
      </div>
    </>
  );
};

export default HomePage;