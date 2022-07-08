import './App.css';
import PersonCardComponent from './components/PersonCardComponent';

function App() {
  return (
    <div className="App">
      <PersonCardComponent firstName="Jane" lastName="Doe" a={45} hairColor="Black"/>
      <PersonCardComponent firstName="John" lastName="Smith" a={88} hairColor="Brown"/>
      <PersonCardComponent firstName="Millard" lastName="Fillmore" a={50} hairColor="Brown"/>
      <PersonCardComponent firstName="Maria" lastName="Smith" a={52} hairColor="Brown"/>
    </div>
  );
}

export default App;
