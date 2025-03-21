import Layout from './components/Layout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Products from './components/Products';
import Stash from './components/Stash';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/stash' element={<Stash />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
