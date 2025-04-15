import { Input } from '../Input';
import {Cycles} from '../Cycles';
import {Button} from '../Button';
import styles from './styles.module.css';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';

export function Form() {
    const { state, dispatch } = useTaskContext();
    const [taskName, setTaskName] = useState('');

    //ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) { 
        event.preventDefault();

        if (taskName === null) return;

        const task = taskName.trim();
        if (!task) {
            alert('Por favor, insira um nome para a tarefa.');
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

        dispatch({type: TaskActionTypes.START_TASK, payload: newTask})
    }

    function handleInterruptTask() {
        dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
    }

    return(
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.form} action="">
                <div className={styles.formRow}>
                    <Input label="Task" id="input" type="text"  disabled={!!state.activeTask} value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
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