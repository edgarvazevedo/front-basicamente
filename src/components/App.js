import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../pages/Homepage/HomePage'
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
