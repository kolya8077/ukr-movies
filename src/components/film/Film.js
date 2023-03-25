import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  Button,
  Container,
  Img,
  Box,
  BoxItem,
} from 'components/film/film.style.jsx';
import { Link, useLocation } from 'react-router-dom';

export const Film = ({ trendingFilm, genresFilm }) => {
  const { title, release_date, overview, poster_path, vote_average } =
    trendingFilm;
  const date = new Date(release_date);
  const year = date.getFullYear();

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  const location = useLocation();

  const backPage = location.state?.from ?? '/';

  return (
    <>
      <Container>
        <Link to={backPage}>
          <Button type="button" to="/">
            <AiOutlineArrowLeft /> Повернутись назад
          </Button>
          {/* <AiOutlineArrowLeft /> Go back */}
        </Link>
        <BoxItem>
          <div>
            <Img
              src={
                poster_path
                  ? IMG_URL + poster_path
                  : `https://bitsofco.de/content/images/2018/12/broken-1.png`
              }
              alt={title}
            />
          </div>
          <Box>
            <h2>
              {title} ({year})
            </h2>
            <p>Оцінка користувача: {`${(vote_average * 10).toFixed(0)}`}%</p>
            <h3>Огляд</h3>
            <p>{overview}</p>
            <h4>Жанр</h4>
            <p>{genresFilm.map(({ name }) => name).join(' / ')}</p>
          </Box>
        </BoxItem>
      </Container>
    </>
  );
};
