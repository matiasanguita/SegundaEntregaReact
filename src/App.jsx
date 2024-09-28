import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Paginas/Home';
import Blog from './components/Paginas/Blog';
import Productos from './components/Paginas/Productos';
import DetalleProducto from './components/Paginas/DetalleProducto';
import { useState } from 'react';

import ThemeContext, { themes } from './context';

function App() {
  const [tema, setTema] = useState(themes.claro);

  const handleTema = () => {
    tema === themes.oscuro ? setTema(themes.claro) : setTema(themes.oscuro);
  };

  return (
    <ThemeContext.Provider value={{ tema, handleTema }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/NuestrasDonas' element={<Productos />} />
          <Route path='/NuestrasDonas/:id' element={<DetalleProducto />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;







