import { Input } from '../Input';
import {Cycles} from '../Cycles';
import {Button} from '../Button';
import styles from './styles.module.css';
import { PlayCircleIcon } from 'lucide-react';

export function Form() {
    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) { 
        event.preventDefault();
    }
    return(
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.form} action="">
                <div className={styles.formRow}>
                    <Input label="Task" id="input" type="text"/>
                </div>

                <div className={styles.formRow}>
                <p>Nesse ciclo descanse por 5 min.</p>
                </div>

                <div className={styles.formRow}>
                    <Cycles/>
                </div>

                <div className={styles.formRow}>
                    <Button icon={<PlayCircleIcon />}/>
                </div>
            </form>
        </div>
    )
}