import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Link, Route, Routes, Redirect, Switch, Navigate } from "react-router-dom";
import About from './pages/About';
import Posts from './pages/Posts';
import { SwitchTransition } from 'react-transition-group';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/about">О сайте</Link>
          <Link to="/posts">Посты</Link>
        </div>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Navigate replace to="/error" />} /> ?
      </Routes>
    </BrowserRouter>
  );

}

export default App;
