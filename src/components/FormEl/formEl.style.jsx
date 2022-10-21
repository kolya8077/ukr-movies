const { default: styled } = require("styled-components")

export const Container = styled.div`
  padding: 20px;
`

export const Input = styled.input`
  width: 250px;
  margin-right: 15px;
`

export const Button = styled.button`
  &:active {
    background-color: blue;
  }
`;