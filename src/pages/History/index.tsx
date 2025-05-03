import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Main } from "../../templates/Main";
import { Button } from "../../components/Button";

import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { useEffect, useState } from "react";
import { sortTasks, SortTasksOptions } from "../../utils/sortTasks";
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function History() {
  const { state, dispatch } = useTaskContext();
    const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const hasTasks = state.tasks.length > 0;
  // const sortedTask = [...state.tasks].sort((a, b) => {
  //   return b.startDate - a.startDate;
  // })
  const [sortTasksOptions, setSortTaskOptions] = useState<SortTasksOptions>(() => {
    return {
      tasks: sortTasks({ tasks: state.tasks }),
      field: "startDate",
      direction: "desc"

    };
  });

  useEffect(() => {
     setSortTaskOptions(prevState => ({
       ...prevState,
       tasks: sortTasks({
         tasks: state.tasks,
         direction: prevState.direction,
         field: prevState.field,
       }),
     }));
  }, [state.tasks]);
  
  
  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';
    
    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  };
  
  function handleResetHistory() {
    showMessage.dismiss();
    showMessage.confirm('Tem certeza?', confirmation => {
      setConfirmClearHistory(confirmation);
    });
  };
  
  useEffect(() => {
   if (!confirmClearHistory) return;

   setConfirmClearHistory(false);

   dispatch({ type: TaskActionTypes.RESET_STATE });
  }, [confirmClearHistory, dispatch]);

  useEffect(() => {
    return () => {
      showMessage.dismiss();
    }
  }, []);
  
  return (
    <Main>
      <Container>
        <Heading>
          <span> History </span>
          {hasTasks && (
            <span className={styles.buttonContainer}>
              <Button icon={<TrashIcon />} color="red" arial-label="Apagar histórico" title="Apagar histórico"
                onClick={handleResetHistory} />
            </span>
          )}
       </Heading>
      </Container>

      <Container>
        {hasTasks && (
          <div className={styles.responsiveTable}>
           <table>
             <thead>
               <tr>
                <th
                   onClick={() => handleSortTasks({ field: 'name' })}
                   className={styles.thSort}
                 >
                   Tarefa ↕
                 </th>
                 <th
                   onClick={() => handleSortTasks({ field: 'duration' })}
                   className={styles.thSort}
                 >
                   Duração ↕
                 </th>
                 <th
                   onClick={() => handleSortTasks({ field: 'startDate' })}
                   className={styles.thSort}
                 >
                   Data ↕
                 </th>
                 <th>Status</th>
                 <th>Tipo</th>
               </tr>
             </thead>
 
             <tbody>
              {sortTasksOptions.tasks.map((task) => {
                  const taskTypeDictionary = {
                   workTime: 'Foco',
                   shortBreakTime: 'Descanso curto',
                   longBreakTime: 'Descanso longo',
                 };
                 return (
                   <tr key={task.id}>
                     <td>{task.name}</td>
                     <td>{task.duration} min</td>
                     <td>{formatDate(task.startDate)}</td>
                     <td>{getTaskStatus(task, state.activeTask)}</td>
                     <td>{taskTypeDictionary[task.type]}</td>
                   </tr>
                 );
               })}
             </tbody>
           </table>
          </div>
        )}

        {!hasTasks && (
          <p style={{ textAlign: 'center'}}>Não possui tarefas criadas.</p>
        )}
      </Container>
    </Main>
  );
}
