import './App.css';
import HeaderForm from './components/HeaderForm';
import {Routes, Route} from 'react-router-dom'
import People from './views/People.jsx'
import Planets from './views/Planets.jsx'
import Starships from './views/Starships.jsx'
import ErrorPage from './views/ErrorPage.jsx'

function App() {
  return (
    <div className='container'>
      <HeaderForm/>
      <Routes>
        <Route path='/people/:id' element={<People/>} />
        <Route path='/planets/:id' element={<Planets/>} />
        <Route path='/starships/:id' element={<Starships/>} />
        <Route path='/error' element={<ErrorPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;
