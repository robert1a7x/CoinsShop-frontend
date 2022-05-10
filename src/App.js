import { Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login';
import Products from '../src/pages/Products';
import Dashboard from '../src/pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={ <Login /> } />
      <Route exact path='/products' element={ <Products /> } />
      <Route exact path='/dashboard' element={ <Dashboard /> } />
    </Routes>
  );
}

export default App;
