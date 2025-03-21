import Layout from './components/Layout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Liked from './pages/Liked';
import Characters from './pages/Characters';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/liked' element={<Liked />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
