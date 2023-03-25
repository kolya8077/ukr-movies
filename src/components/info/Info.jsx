import { Conteiner, LinkEl, List, Item } from 'components/info/info.style';
import { Outlet } from 'react-router-dom';

export const Info = () => {
  return (
    <>
      <Conteiner>
        <p>Додаткова інформація</p>
        <List>
          <Item>
            <LinkEl to={'cast'}>Акторський склад</LinkEl>
          </Item>
          <Item>
            <LinkEl to={'revievs'}>Рев'ю</LinkEl>
          </Item>
        </List>
      </Conteiner>
      <Outlet />
    </>
  );
};
