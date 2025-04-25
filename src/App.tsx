import "./styles/global.css";

import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Messages } from "./components/Messages";

export function App() {
  return (
    <TaskContextProvider>
      <Messages>
         <Home />
      </Messages>
     </TaskContextProvider>
  );
}
