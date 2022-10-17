import { Outlet } from "react-router-dom"
import { LinkEl, Header } from 'components/header/headerEL.style.jsx';

export const HeaderEl = () => {
  return (
    <>
    <Header>
      <nav>
        <LinkEl to="/" end>Home</LinkEl>
        <LinkEl to="/movie">Movie</LinkEl>
      </nav>
    </Header>
    <Outlet />
    </>
  )
}