import { SaveIcon } from 'lucide-react';
 import { Container } from '../../components/Container';
 import { Button } from '../../components/Button';
 import { Input } from '../../components/Input';
 import { Heading } from '../../components/Heading';
import { Main } from '../../templates/Main';
 
import styles from "./styles.module.css"
 
 export function Settings() {
   return (
     <Main>
       <Container>
         <Heading>Configurações</Heading>
       </Container>
 
       <Container>
         <p style={{ textAlign: 'center' }}>
           Modifique as configurações para tempo de foco, descanso curto e
           descanso longo.
         </p>
       </Container>
 
       <Container>
         <form action='' className={styles.form}>
           <div className={styles.formRow}>
             <Input id='workTime' label='Foco' />
           </div>
           <div className={styles.formRow}>
             <Input id='shortBreakTime' label='Descanso curto' />
           </div>
           <div className={styles.formRow}>
             <Input id='longBreakTime' label='Descanso longo' />
           </div>
           <div className={styles.formRow}>
             <Button
               icon={<SaveIcon />}
               aria-label='Salvar configurações'
               title='Salvar configurações'
             />
           </div>
         </form>
       </Container>
     </Main>
   );
 }