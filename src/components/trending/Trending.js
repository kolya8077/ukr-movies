export const Trending = ({trendingFilm}) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trendingFilm.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </>
  );
};
