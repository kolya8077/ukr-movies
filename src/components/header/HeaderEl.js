import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LinkEl, Header } from 'components/header/headerEL.style.jsx';
import { Loading } from 'components/loading.style';

export const HeaderEl = () => {
  return (
    <>
      <Header>
        <nav>
          <LinkEl to="/" end>
            Home
          </LinkEl>
          <LinkEl to="/movies">Movie</LinkEl>
        </nav>
      </Header>
      <Suspense fallback={<Loading>Loading...</Loading>}>
        <Outlet />
      </Suspense>
    </>
  );
};
