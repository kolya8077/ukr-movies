import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchSearch } from 'servise/api';
// import FilmDetailsPage from 'pages/FilmDetailsPage/FilmDetailsPage';
// import { NavLink } from 'react-router-dom';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Trending } from 'components/trending/Trending';
import { FormEl } from 'components/FormEl/FormEl'

const MoviePage = () => {
  const [resultFilm, setResultFilm] = useState([]);
  const [search, setSearch] = useSearchParams();
  const location = useLocation();
  const query = search.get('query') ?? '';

  const handleChange = e => {
    const { value } = e.currentTarget;
    setSearch(value !== '' ? { query: value } : {});
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      toast.warn('Please specify your query!');
      return;
    }
  };

  useEffect(() => {
    if (query === '') return;
    fetchSearch(query).then(setResultFilm);
  }, [query]);

  return (
    <>
      <FormEl handleChange={handleChange} handleSubmit={handleSubmit} />

      {query.length > 0 && (
        <Trending trendingFilms={resultFilm} location={location} />
      )}
    </>
  );
};

export default MoviePage;
