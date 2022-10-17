import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkEl = styled(NavLink)`
  padding: 5px 20px;
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0px 1px 5px #908060;
`;
