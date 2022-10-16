import { Link, Outlet } from 'react-router-dom';

export const Info = () => {
  return (
    <>
      <p>Additional information</p>
      <ul>
        <Link to={'cast'}>Cast</Link>
        <Link to={'revievs'}>Revievs</Link>
      </ul>
      <Outlet />
    </>
  );
};
