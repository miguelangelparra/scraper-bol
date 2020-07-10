import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";



import './App.css';
import {TableUltimosPrecios} from './pages/TableUltimosPrecios'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TableUltimosPrecios></TableUltimosPrecios>
      </header>
    </div>
  );
}

export default App;
