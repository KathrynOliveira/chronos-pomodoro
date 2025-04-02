import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";
import "./styles/global.css";

export function App() {
  return (
    <>
          <Heading>
              Olá Mundo!
              <button>
                <TimerIcon/>
              </button>
          </Heading>
    </>
  );
}
