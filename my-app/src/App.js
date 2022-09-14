import './App.css';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from "./components/StatefulGreeting";
import HooksCounter from "./components/HooksCounter";
import NavBarSimple from "./components/NavBarSimple";
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';

function App() {
  return <div className="App">
    <EventsFunctional />
    <EventsClass />
  </div>
}

export default App;