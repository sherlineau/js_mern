import logo from './logo.svg';
import './App.css';
import ClassPropsComponent from './components/ClassPropsComponent';
import { ClassStateComponent } from './components/ClassStateComponent';
import FunctionalPropsComponent from './components/FunctionalPropsComponent';
import FunctionalStateComponent from './components/FunctionalStateComponent';


function App() {
  return (
    <div className="App">
      <h1>TV Shows</h1>
        <FunctionalPropsComponent title="The Witcher" episodes= {20} isRecommended={true} hashtags={['fantasy','100/10','monsters']}/>
        <FunctionalStateComponent/>
        <ClassPropsComponent title="Umbrella Academy" episodes = {30} isRecommended={false}  hashtags= {['first two seasons are great','superpower']}
        />
        <ClassStateComponent/>
        
    </div>
  );
}

export default App;
