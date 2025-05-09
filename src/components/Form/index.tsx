import { Input } from '../Input';
import {Cycles} from '../Cycles';
import {Button} from '../Button';
import styles from './styles.module.css';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';
import { showMessage } from '../../adapters/showMessage';

export function Form() {
    const { state, dispatch } = useTaskContext();
    const taskName = useRef<HTMLInputElement>(null);
    const lastName = state.tasks[state.tasks.length - 1]?.name || '';

    //ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) { 
        event.preventDefault();

        if (taskName.current === null) return;

        const task = taskName.current.value.trim();
        if (!task) {
            showMessage.warning('Por favor, insira um nome para a tarefa.');
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: task,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        }

        dispatch({ type: TaskActionTypes.START_TASK, payload: newTask })
        showMessage.warning('Tarefa iniciada.');
    }

    function handleInterruptTask() {
        showMessage.error('Tarefa interrompida.');
        dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
    }

    return(
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.form} action="">
                <div className={styles.formRow}>
                    <Input label="Task" id="input" type="text"
                        disabled={!!state.activeTask} ref={taskName}
                        placeholder='Digite aqui'
                        defaultValue={lastName} />
                </div>

                <div className={styles.formRow}>
                   <Tips/>
                </div>

                {state.currentCycle > 0 && (
                    <div className={styles.formRow}>
                        <Cycles/>
                    </div>
                )}

                <div className={styles.formRow}>
                    {!state.activeTask && (
                        <Button type='submit' aria-label='Iniciar nova tarefa' title="Iniciar nova tarefa" icon={<PlayCircleIcon />} />
                    )}
                    
                    {!!state.activeTask && (
                         <Button onClick={handleInterruptTask} type='button' color="red" aria-label='Interromper tarefa atual' title="Interromper tarefa atual" icon={<StopCircleIcon />}/>    
                    )}
                </div>
            </form>
        </div>
    )
}