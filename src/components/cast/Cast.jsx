import { useParams } from 'react-router-dom';
import { fetchCast } from 'servise/api';
import { useState, useEffect } from 'react';
import { List, Item, Img, Text } from './cast.style';
import { Loading } from 'components/loading.style';

const Cast = () => {
  const { movieId } = useParams();

  const [movie_id] = useState(movieId);
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      const cast = await fetchCast(movie_id);

      setActors(cast);
      setIsLoading(true)
    };
    getCast();
  }, [movie_id]);
  

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      {isLoading ? (
        <List>
          {actors.map(({ character, original_name, profile_path, cast_id }) => (
            <Item key={cast_id}>
              <Img
                src={
                  profile_path
                    ? IMG_URL + profile_path
                    : `https://bitsofco.de/content/images/2018/12/broken-1.png`
                }
                alt={original_name}
              />
              <Text>{original_name}</Text>
              <p>Character: {character}</p>
            </Item>
          ))}
        </List>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </>
  );
};

export default Cast;
