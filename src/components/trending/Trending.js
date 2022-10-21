
import FilmDetailsPage from 'pages/FilmDetailsPage/FilmDetailsPage';
import {
  List,
  Item,
  LinkEl,
} from 'components/trending/trending.styled.jsx';




export const Trending = ({ trendingFilms, location }) => {
  return (
    <>
      <List>
        {trendingFilms.map(({ title, id }) => (
          <Item key={id}>
            <LinkEl to={`/movies/${id}`} state={{from: location}}  element={<FilmDetailsPage />}>
              {title}
            </LinkEl>
          </Item>
        ))}
      </List>
    </>
  );
};
