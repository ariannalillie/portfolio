import { useContext } from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Toggle from "./components/Toggle";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;



  return (
    <div style={{
      backgroundColor:darkMode ? '#222' : 'white',
      color:darkMode && 'white'
    }}>
      <Toggle />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
