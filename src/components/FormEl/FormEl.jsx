import {
  Container,
  Input,
  // Button
} from 'components/FormEl/formEl.style';

export const FormEl = ({
  // handleSubmit,
  handleChange,
}) => {
  return (
    <Container>
      <form
      // onSubmit={handleSubmit}
      >
        <Input
          type="text"
          name="query"
          autoFocus={true}
          placeholder="Пошук фільму"
          onChange={handleChange}
        />
        {/* <Button type="submit">Пошук</Button> */}
      </form>
    </Container>
  );
};
