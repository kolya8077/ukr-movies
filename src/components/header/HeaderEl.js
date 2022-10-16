import { NavLink, Outlet } from "react-router-dom"

export const HeaderEl = () => {
  return (
    <>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movie">Movie</NavLink>
      </nav>
    </header>
    <Outlet />
    </>
  )
}