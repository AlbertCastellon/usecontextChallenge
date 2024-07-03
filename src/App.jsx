import './App.css'; // Archivo de estilos CSS
import React from 'react';
import RoutesApp from './routes/RoutesApp'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './themes/ThemeContext';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <RoutesApp />
        </ThemeProvider>
      
    </>
  );
};

export default App;
