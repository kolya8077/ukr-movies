import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servise/api';
import { useState, useEffect } from 'react';

export const Reviews = () => {
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
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author {author}.</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
