
import { FilmDetailsPage } from 'pages/FilmDetailsPage/FilmDetailsPage';
import {
  Title,
  List,
  Item,
  LinkEl,
} from 'components/trending/trending.styled.jsx';



export const Trending = ({ trendingFilms }) => {
  return (
    <>
      <Title>Trending today</Title>
      <List>
        {trendingFilms.map(({ title, id }) => (
          <Item key={title}>
            <LinkEl to={`movie/${id}`} element={<FilmDetailsPage />}>
              {title}
            </LinkEl>
          </Item>
        ))}
      </List>
    </>
  );
};
