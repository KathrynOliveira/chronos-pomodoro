import { useEffect, useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode,
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  // useEffect(() => {console.log(state)}, [state]);

  const [] = useReducer((state, action) => {
    return state;
  }, 0)
  
  return (
    <TaskContext.Provider value={{ state, setState }}>
      {/* {children} */}
      <h1>Testando</h1>
    </TaskContext.Provider>
  );
}