import Home from '../src/components/Home'
import Header from "../src/components/Header";
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return (
    <div className="App">
    {/* Hello */}
    <BrowserRouter>
    {<Header />}
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>     
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
