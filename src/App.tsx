import "./styles/global.css";

import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Messages } from "./components/Messages";
import { Router } from "./routers/Router";


export function App() {
  return (
    <TaskContextProvider>
      <Messages>
        <Router/>
      </Messages>
    </TaskContextProvider>
  );
}
