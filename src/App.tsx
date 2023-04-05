import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const Hi = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}
function Dummy({ text, active = false }: DummyProps) {
  return <h1>{text}</h1>;
}
function App() {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {};
  return (
    <Container>
      <Dummy text="Hello"></Dummy>
      <button onClick={onClick}>click me</button>
    </Container>
  );
}

export default App;
