import { HeaderEl } from './header/HeaderEl';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { MoviePage } from 'pages/MoviePage/MoviePage';
import { FilmDetailsPage } from 'pages/FilmDetailsPage/FilmDetailsPage';
import { Cast } from 'components/cast/Cast';
import { Reviews } from './reviews/Reviews';

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderEl />}>
          <Route index element={<HomePage />} />
          <Route path="movie" element={<MoviePage />}></Route>
          <Route path="movie/:movieId" element={<FilmDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="Revievs" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

// <HeaderEl/>
// <div>
//   {loadFilms && <Trending trendingFilms={trendingFilms} />}
//   {loadFilm && <Film trendingFilm={trendingFilm} genresFilm={genresFilm} />}
// </div>
