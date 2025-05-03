import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Heading } from "../../components/Heading";
import { Main } from "../../templates/Main";

import styles from "./styles.module.css";

import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function Settings() {
  const { state } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = workTimeInput.current?.value;
    const shortBreakTime = shortBreakTimeInput.current?.value;
    const longBreakTime = longBreakTimeInput.current?.value;

    console.log(workTime, shortBreakTime, longBreakTime);
  }

  return (
    <Main>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action="" className={styles.form}>
          <div className={styles.formRow}>
            <Input
               id='workTime'
               label='Foco'
               ref={workTimeInput}
               defaultValue={state.config.workTime}
             />
          </div>
          <div className={styles.formRow}>
            <Input id="shortBreakTime" label="Descanso curto" ref={shortBreakTimeInput}
               defaultValue={state.config.shortBreakTime} />
          </div>
          <div className={styles.formRow}>
            <Input id="longBreakTime" label="Descanso longo"  ref={longBreakTimeInput}
               defaultValue={state.config.longBreakTime}/>
          </div>
          <div className={styles.formRow}>
            <Button
              icon={<SaveIcon />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
            />
          </div>
        </form>
      </Container>
    </Main>
  );
}
