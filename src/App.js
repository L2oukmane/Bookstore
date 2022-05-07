import {
  Route,
  Routes,
} from 'react-router-dom';
import NavBar from './components/Navbar';

import './App.css';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Header from './components/Header';

function App() {
  return (
    <div>
      <div className="container">
        <div className="inner">
          <NavBar />
          <Header />
          <Routes>
            <Route path="/categories" element={<Categories />} />
            <Route path="/" element={<Books />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
