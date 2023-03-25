import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servise/api';
import { useState, useEffect } from 'react';
import { List, Item, Title, Worning } from 'components/reviews/reviews.style';
import { Loading } from 'components/loading.style';

const Reviews = () => {
  const { movieId } = useParams();

  const [movie_id] = useState(movieId);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getFilm = async () => {
      const reviews = await fetchReviews(movie_id);

      setReviews(reviews);
      setIsLoading(true);
    };

    getFilm();
  }, [movie_id]);

  return (
    <>
      {isLoading ? (
        <>
          {reviews.length ? (
            <List>
              {reviews.map(({ author, content, id }) => (
                <Item key={id}>
                  <Title>Автор {author}.</Title>
                  <p>{content}</p>
                </Item>
              ))}
            </List>
          ) : (
            <Worning>
              До цього фільму ще немає жодної рецензії.
            </Worning>
          )}
        </>
      ) : (
        <Loading>Завнтаження...</Loading>
      )}
    </>
  );
};

export default Reviews;
