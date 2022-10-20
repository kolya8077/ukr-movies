import { lazy } from 'react';
import { HeaderEl } from './header/HeaderEl';
import { Route, Routes } from 'react-router-dom';
import Cast from 'components/cast/Cast';
import Reviews from './reviews/Reviews';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('pages/MoviePage/MoviePage'));
const FilmDetailsPage = lazy(() =>
  import('pages/FilmDetailsPage/FilmDetailsPage')
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderEl />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />}></Route>
          <Route path="movies/:movieId" element={<FilmDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="revievs" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer theme="colored" position="top-right" autoClose={3000} />
    </>
  );
};
