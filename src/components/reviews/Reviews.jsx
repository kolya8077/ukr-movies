import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servise/api';
import { useState, useEffect } from 'react';
import { List, Item, Title, Worning } from 'components/reviews/reviews.style';

const Reviews = () => {
  const { movieId } = useParams();

  const [movie_id] = useState(movieId);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getFilm = async () => {
      const reviews = await fetchReviews(movie_id);

      setReviews(reviews);
    };

    getFilm();
  }, [movie_id]);

  return (
    <>
      {reviews.length ? (
        <List>
          {reviews.map(({ author, content, id }) => (
            <Item key={id}>
              <Title>Author {author}.</Title>
              <p>{content}</p>
            </Item>
          ))}
        </List>
      ) : (
        <Worning>We don't have any reviews for this movie.</Worning>
      )}
    </>
  );
};

export default Reviews;