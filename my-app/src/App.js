import './App.css';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from "./components/StatefulGreeting";
import HooksCounter from "./components/HooksCounter";

function App() {
  return (
    <div className="App">

      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" />
    </div>
  );
}

export default App;