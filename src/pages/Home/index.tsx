import { useEffect } from "react";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Form } from "../../components/Form";
import { Main } from "../../templates/Main";

export function Home() {

  useEffect(() => {
      document.title = 'Chronos Pomodoro'
  })
  
  return (
    <Main>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <Form />
      </Container>
    </Main>
  );
}
