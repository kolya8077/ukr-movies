import styled from "styled-components";

export const Button = styled.button`
  margin-bottom: 10px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  &:active {
    background-color: blue;
  }
`;

export const Container = styled.div`
  padding: 15px;
  box-shadow: 0px 1px 5px #908060;
`;

export const BoxItem = styled.div`
  display: flex;
`;

export const Img = styled.img`
  width: 200px;
`

export const Box = styled.div`
width: 300px;
margin-left: 30px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`