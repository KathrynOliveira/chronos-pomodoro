import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Form } from "../../components/Form";
import { Heading } from "../../components/Heading";
import { Main } from "../../templates/Main";
import { Button } from "../../components/Button";

import styles from "./styles.module.css";

export function History() {
  return (
    <Main>
      <Container>
        <Heading>
          <span> History </span>
          <span className={styles.buttonContainer}>
            <Button icon={<TrashIcon />} color="red" arial-label="Apagar histórico" title="Apagar histórico"/>
          </span>
       </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
           <table>
             <thead>
               <tr>
                 <th>Tarefa</th>
                 <th>Duração</th>
                 <th>Data</th>
                 <th>Status</th>
                 <th>Tipo</th>
               </tr>
             </thead>
 
             <tbody>
               {Array.from({ length: 20 }).map((_, index) => {
                 return (
                   <tr key={index}>
                     <td>Estudar</td>
                     <td>25min</td>
                     <td>20/04/2025 08:00</td>
                     <td>Completa</td>
                     <td>Foco</td>
                   </tr>
                 );
               })}
             </tbody>
           </table>
         </div>
      </Container>
    </Main>
  );
}
