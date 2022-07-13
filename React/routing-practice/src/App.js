import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { useParams } from 'react-router';

// functional components to be transferred to separate files and imported into App.js component
// home.jsx
const Home = (props) => {
  return (
    <fieldset>
      {/* similar to the a tag in html -> for dom styling it looks like an a tag */}
      <h1>Welcome</h1>
      <Link to={"/about"}>Go to About</Link>
    </fieldset>
  );
}

const About = (props) => {
  return (
    <fieldset>
      <Link to={"/"}>Go Home</Link>
    </fieldset>
  );
}

const Number = (props) => {
  const { num } = useParams(); //needs to match :num in Routes 

  return (
    <fieldset>
      {/* converts input param to int and checks if it is not a number, if it returns true -> word is display, if false number is displayed */}
      <h1>The { isNaN(parseInt(num))? 'word':'number'} is: {num} </h1>
    </fieldset>
  )
}

const Word = (props) => {
  const { word , color, bgColor} = useParams();
  return (
    <fieldset>
      <h1 style={{color:color,backgroundColor:bgColor}}>The word is: {word} </h1>
    </fieldset>
  )
}

function App() {
  return (
    <div className="App">
      <fieldset>
        <legend>Routing Example</legend>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/:num" element={<Number/>} />

          {/* need to nest multiple routes for chained routes */}
          <Route path="/:word" element={<Word/>}>
            <Route path="/:word/:color" element={<Word/>}>
              <Route path="/:word/:color/:bgColor" element={<Word/>}/>
            </Route>
          </Route>

        </Routes>
      </fieldset>
    </div>
  );
}

export default App;
