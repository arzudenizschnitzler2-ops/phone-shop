import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Produkte from './pages/Produkte';
import Warenkorb from './pages/Warenkorb';
import Detail from './pages/Detail';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <div
          style={{
            minHeight: '100vh',
            background: '#f8fafc',
            fontFamily: 'Arial',
          }}
        >
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produkte" element={<Produkte />} />
            <Route path="/warenkorb" element={<Warenkorb />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;