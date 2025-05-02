import "./styles/global.css";

import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Messages } from "./components/Messages";
import { BrowserRouter, Routes, Route } from "react-router";
import { NotFound } from "./pages/NotFound";
import { AboutPomodoro } from "./pages/About";

export function App() {
  return (
    <TaskContextProvider>
      <Messages>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about-pomodoro" element={<AboutPomodoro />} />
            
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </BrowserRouter>
      </Messages>
    </TaskContextProvider>
  );
}
