import { useParams } from "react-router-dom";
import { fetchCast } from "servise/api";
import { useState, useEffect } from "react";


export const Cast = () => {
  const { movieId } = useParams();

  const [movie_id] = useState(movieId);
  const [actors, setActors] = useState([]);

useEffect(() => {
  const getCast = async () => {
    const cast = await fetchCast(movie_id);

    setActors(cast);
  };

  getCast();
}, [movie_id]);
  
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  

  return (
    <>
      <ul>
        {actors.map(({ character, original_name, profile_path, cast_id }) => (
          <li key={cast_id}>
            <img
              src={
                profile_path
                  ? IMG_URL + profile_path
                  : `https://bitsofco.de/content/images/2018/12/broken-1.png`
              }
              alt={original_name}
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}