import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchSearch } from 'servise/api';
import FilmDetailsPage from 'pages/FilmDetailsPage/FilmDetailsPage';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoFocus={true}
          placeholder="Search films"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      {query.length > 0 && (
        <ul>
          {resultFilm.map(({ title, id }) => (
            <li key={id}>
              <NavLink
                to={`${id}`}
                element={<FilmDetailsPage />}
                state={{ from: location }}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviePage;
