import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/products' element={<Main />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/products/:id/edit' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
