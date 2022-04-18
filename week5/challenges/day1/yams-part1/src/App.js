import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* path"*" redirige vers le home si l'url n'existe pas */}
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
