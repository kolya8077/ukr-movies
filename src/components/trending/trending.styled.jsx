import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Title = styled.h2`
  padding: 15px 5px;
`

export const List = styled.ul`
  padding: 20px;
`

export const Item = styled.li`
  list-style: disc;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`

export const LinkEl = styled(NavLink)`
  color: blue;

  &:active {
    color: red;
  }
`;