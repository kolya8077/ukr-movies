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
            Домівка
          </LinkEl>
          <LinkEl to="/movies">Пошук за назвою</LinkEl>
        </nav>
      </Header>
      <Suspense fallback={<Loading>Завантаження...</Loading>}>
        <Outlet />
      </Suspense>
    </>
  );
};
