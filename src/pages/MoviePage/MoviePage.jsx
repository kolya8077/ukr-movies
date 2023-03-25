import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
import { fetchSearch } from 'servise/api';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Trending } from 'components/trending/Trending';
import { FormEl } from 'components/FormEl/FormEl';

const MoviePage = () => {
  const [resultFilm, setResultFilm] = useState([]);
  const [search, setSearch] = useSearchParams();
  const location = useLocation();
  const query = search.get('query') ?? '';

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const value = form.query.value;
  //   if (value === '') {
  //     toast.warn('Please specify your query!');
  //     return;
  //   }
  //   setSearch(value !== '' ? { query: value } : {});
  // };

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    if (value.length > 0) {
      setSearch('')
    }
    // if (value.length <= 1) {
      setSearch(value !== '' ? { query: value } : {});
    // }

}
  useEffect(() => {
    if (query === '') return;

    fetchSearch(query).then(setResultFilm);
  }, [query]);


  return (
    <>
      <FormEl
        // handleSubmit={handleSubmit}
        handleChange={handleChange} />

      {query.length > 0 && (
        <Trending trendingFilms={resultFilm} location={location} />
      )}
    </>
  );
};

export default MoviePage;
