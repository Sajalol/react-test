import './App.css';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from "./components/StatefulGreeting";
import HooksCounter from "./components/HooksCounter";

function App() {
  return (
    <div className="App">

      <StatefulGreeting greeting ="from Norway" name="Mike"/>
    </div>
  );
}

export default App;