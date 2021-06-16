import './App.css';
import React from 'react';
import Home from './components/home/index'
import Loading from "./components/loader/loader"

function App() {
  return (
    <div className="container">
      <Home />
      <Loading />
    </div>
  );
}

export default App;