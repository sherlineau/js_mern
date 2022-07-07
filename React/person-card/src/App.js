import './App.css';
import PersonCardComponent from './components/PersonCardComponent';

function App() {
  return (
    <div className="App">
      <PersonCardComponent firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <PersonCardComponent firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
      <PersonCardComponent firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
      <PersonCardComponent firstName="Maria" lastName="Smith" age={52} hairColor="Brown"/>
    </div>
  );
}

export default App;
