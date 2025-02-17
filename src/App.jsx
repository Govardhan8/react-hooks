import "./App.css";
import { Hooks } from "./components/Hooks";
import Timer from "./components/Timer";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Timer />
      <Hooks />
    </UserContextProvider>
  );
}

export default App;
