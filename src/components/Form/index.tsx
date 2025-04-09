import { Input } from '../Input';
import {Cycles} from '../Cycles';
import {Button} from '../Button';
import styles from './styles.module.css';
import { PlayCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function Form() {
    const { state, setState } = useTaskContext();
    const [taskName, setTaskName] = useState('');

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

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                task: [...prevState.tasks, newTask],
                config: {...prevState.config},
            }
        })

    }
    return(
        <div>
            <form onSubmit={handleCreateNewTask} className={styles.form} action="">
                <div className={styles.formRow}>
                    <Input label="Task" id="input" type="text"  disabled={!!state.activeTask} value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                </div>

                <div className={styles.formRow}>
                <p>Nesse ciclo descanse por 5 min.</p>
                </div>

                {state.currentCycle > 0 && (
                    <div className={styles.formRow}>
                        <Cycles/>
                    </div>
                )}

                <div className={styles.formRow}>
                    <Button type='submit' icon={<PlayCircleIcon />}/>
                </div>
            </form>
        </div>
    )
}