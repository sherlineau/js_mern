import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom'
import ErrorPage from './views/ErrorPage';
import Country from './views/Country';
import Keyword from './views/Keyword';
import DisplayOnLoad from './views/DisplayOnLoad';

// components -> usually a separate .jsx file that is imported in
const Home = () => {
  return (
    <fieldset>
      <legend>Home.jsx</legend>
    </fieldset>
  )
}

const About = () => {
  return (
    <fieldset>
      <legend>About.jsx</legend>
    </fieldset>
  )
}


function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
      <h1>Routing Demo</h1>
      <p> Links: 
        <Link to="/home">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/japan">Japan</Link> |
        <Link to="/pokemon/snorlax">Search for snorlax</Link> |
      </p>
      <p>
        <a href="/about"> A-Tags </a> 
        refresh the page everytime an a tag is pressed - for react apps we don't want the page to refresh.
      </p>
      <p>Only use A tags for external links</p>

      <Routes>
        {/* needs path= and element= */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* params 
        variable country = japan
        path="/japan" */}
        <Route path="/:country" element={<Country/>} />
        <Route path="/:keyword/:color" element={<Keyword/>} />
        {/* path is /pokemon/ :parameter */}
        <Route path="/pokemon/:pokemonName" element={<DisplayOnLoad/>} />

        {/* for error page -> * -> if it cant find a specific route it will display the error page  */}
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      
    </fieldset>
  );
}

export default App;
