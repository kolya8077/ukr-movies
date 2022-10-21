import { Container, Input, Button } from 'components/FormEl/formEl.style';

export const FormEl = ({ handleSubmit }) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          autoFocus={true}
          placeholder="Search films"
        />
        <Button type="submit">Search</Button>
      </form>
    </Container>
  );
};
