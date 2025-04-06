const { createContext } = require("react");

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

type TaskContextProviderProps = {
    children: React.ReactNode;
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    return (
      <TaskContext.Provider value={initialContextValue}>
        {children}
      </TaskContext.Provider>
    );
}