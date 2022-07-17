import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/products' element={<Main/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
