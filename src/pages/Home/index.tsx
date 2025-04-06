import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Form } from "../../components/Form";
import { TaskStateModel } from "../../models/TaskStateModel";
import { Main } from "../../templates/Main";

type HomeProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export function Home(props: HomeProps) {
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
