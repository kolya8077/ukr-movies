import { Container, Input, Button } from 'components/FormEl/formEl.style';

export const FormEl = ({ handleChange, handleSubmit }) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          autoFocus={true}
          placeholder="Search films"
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </form>
    </Container>
  );
};
