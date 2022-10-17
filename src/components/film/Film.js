import { AiOutlineArrowLeft } from 'react-icons/ai';

export const Film = ({ trendingFilm, genresFilm }) => {
  const { title, release_date, overview, poster_path, vote_average } =
    trendingFilm;
  const date = new Date(release_date);
  const year = date.getFullYear();

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <button tupe button>
        <AiOutlineArrowLeft /> Go back
      </button>
      <div>
        <img
          src={
            poster_path
              ? IMG_URL + poster_path
              : `https://bitsofco.de/content/images/2018/12/broken-1.png`
          }
          alt={title}
        />
      </div>
      <div>
        <h2>
          {title} ({year})
        </h2>
        <p>User Score: {`${(vote_average * 10).toFixed(0)}`}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        {/* {genresFilm.map(({ name }) => (
          <p>{name}</p>
        ))} */}
        <p>{genresFilm.map(({ name }) => name).join(' / ')}</p>
      </div>
    </>
  );
};
