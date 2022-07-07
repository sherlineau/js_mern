import './App.css';
import HelloComponent from './components/HelloComponent';
import TodoComponent from './components/TodoComponent';

function App() {
  return (
    <div className="App">
      <HelloComponent/>
      <TodoComponent todos= {['Learn React']}/>
      <TodoComponent todos= {['Climb Mt. Everest']}/>
      <TodoComponent todos= {['Run a mountain']}/>
      <TodoComponent todos= {['Feed the dogs']}/>
    </div>
  );
}

export default App;
