import './App.css';
import React from 'react';
import Home from './components/home/index'
import Loading from "./components/loader/loader"
// import 

function App() {
  return (
    <div className="container">
      <Home />
      <Loading />
    </div>
  );
}

export default App;
