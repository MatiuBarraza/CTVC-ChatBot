import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app/App'; // El componente principal de la app
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

const Main = () => {

  return (
 
        <App />  // Si está autenticado, mostramos el componente principal App
  
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
