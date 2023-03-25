import { Container, Title } from 'components/NotFound/notFound.style.jsx';

export const NotFound = () => {
  return (
    <Container>
      <Title>Не знайдено</Title>
      <p>Запитуваний ресурс не може бути знайдений на цьому сервері!</p>
    </Container>
  );
}