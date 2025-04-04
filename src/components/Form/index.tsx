import { Input } from '../Input';
import styles from './styles.module.css';

export function Form(){
    return(
        <div>
            <form className={styles.form} action="">
                <div className={styles.formRow}>
                    <Input label="Task" id="input" type="text"/>
                </div>

                <div className={styles.formRow}>
                <p>Nesse ciclo descanse por 5 min.</p>
                </div>

                <div className={styles.formRow}>
                <p>Ciclos</p>
                </div>

                <div className={styles.formRow}>
                <button>Enviar</button>
                </div>
            </form>
        </div>
    )
}