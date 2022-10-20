import { Conteiner, LinkEl, List, Item } from 'components/info/info.style';
import { Outlet } from 'react-router-dom';

export const Info = () => {
  return (
    <>
      <Conteiner>
        <p>Additional information</p>
        <List>
          <Item>
            <LinkEl to={'cast'}>Cast</LinkEl>
          </Item>
          <Item>
            <LinkEl to={'revievs'}>Revievs</LinkEl>
          </Item>
        </List>
      </Conteiner>
      <Outlet />
    </>
  );
};
