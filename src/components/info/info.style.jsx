import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Conteiner = styled.div`
  padding: 15px;
  box-shadow: 0px 1px 5px #908060;
`;

export const List = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
`;
export const Item = styled.li`
  list-style: disc;
  &:last-child {
    margin-top: 5px;
  }
`;

export const LinkEl = styled(NavLink)`
  color: blue;

  &.active {
    color: red;
  }

  &:hover {
    text-decoration: underline;
  }
`;
