import { Link } from 'react-router-dom';
import { FilmDetailsPage } from 'pages/FilmDetailsPage/FilmDetailsPage';


export const Trending = ({ trendingFilms }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trendingFilms.map(({ title, id }) => (
          <li key={title}>
            <Link to={`movie/${id}`} element={<FilmDetailsPage />}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
